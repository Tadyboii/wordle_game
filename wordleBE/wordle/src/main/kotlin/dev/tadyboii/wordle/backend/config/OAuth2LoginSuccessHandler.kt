package dev.tadyboii.wordle.backend.config

import dev.tadyboii.wordle.backend.model.UserDTO
import dev.tadyboii.wordle.backend.service.UserService
import jakarta.servlet.http.HttpServletRequest
import jakarta.servlet.http.HttpServletResponse
import org.springframework.beans.factory.annotation.Value
import org.springframework.security.core.Authentication
import org.springframework.security.core.authority.SimpleGrantedAuthority
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken
import org.springframework.security.oauth2.core.oidc.user.DefaultOidcUser
import org.springframework.security.web.authentication.SavedRequestAwareAuthenticationSuccessHandler
import org.springframework.stereotype.Component


@Component
class OAuth2LoginSuccessHandler(
    private val userService: UserService
) : SavedRequestAwareAuthenticationSuccessHandler() {

    @Value("\${frontend.url}")
    private lateinit var frontendUrl: String

    override fun onAuthenticationSuccess(
        request: HttpServletRequest,
        response: HttpServletResponse,
        authentication: Authentication
    ) {

        val oAuth2AuthenticationToken = authentication as OAuth2AuthenticationToken
        val principal = authentication.principal as DefaultOidcUser
        val attributes = principal.attributes

        val name = attributes["name"] as String
        val email = attributes["email"] as String
        val picture = attributes["picture"] as String

        val existingUser = userService.getUserByEmail(email)
        if (existingUser != null) {
            val authorities = listOf(SimpleGrantedAuthority(existingUser.role))
            val newPrincipal = DefaultOidcUser(authorities, principal.idToken, principal.userInfo)
            val newAuthentication = OAuth2AuthenticationToken(
                newPrincipal,
                authorities,
                oAuth2AuthenticationToken.authorizedClientRegistrationId
            )
            SecurityContextHolder.getContext().authentication = newAuthentication
        } else {
            val newUserEntity = userService.createUser(
                UserDTO(
                    id = null,
                    name = name,
                    email = email,
                    picture = picture,
                    role = "PLAYER"
                )
            )!!
            val authorities = listOf(SimpleGrantedAuthority(newUserEntity.role))
            val newPrincipal = DefaultOidcUser(authorities, principal.idToken, principal.userInfo)
            val newAuthentication = OAuth2AuthenticationToken(
                newPrincipal,
                authorities,
                oAuth2AuthenticationToken.authorizedClientRegistrationId
            )
            SecurityContextHolder.getContext().authentication = newAuthentication
        }

        this.isAlwaysUseDefaultTargetUrl = true
        this.defaultTargetUrl = frontendUrl
        super.onAuthenticationSuccess(request, response, authentication)
    }
}