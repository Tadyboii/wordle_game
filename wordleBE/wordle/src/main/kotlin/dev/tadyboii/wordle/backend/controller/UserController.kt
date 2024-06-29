package dev.tadyboii.wordle.backend.controller

import dev.tadyboii.wordle.backend.model.UserDTO
import dev.tadyboii.wordle.backend.service.UserService
import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.util.UUID

@RestController
@RequestMapping("/wordle")
class UserController(private val userService: UserService) {

    @GetMapping("/user")
    fun user(@AuthenticationPrincipal oAuth2User: OAuth2User?): UserDTO {
        val email = oAuth2User?.attributes?.get("email") as String
        val userDTO = userService.getUserByEmail(email)
        return userDTO!!
    }

    @GetMapping("/users")
    fun getUsers(): List<UserDTO> {
        return userService.getUsers()
    }

    @PostMapping("/users")
    fun createUser(@RequestBody userDTO: UserDTO): UserDTO? {
        return userService.createUser(userDTO)
    }

    @GetMapping("/users/{id}")
    fun getUser(@PathVariable id: UUID): UserDTO {
        return userService.getUser(id)
    }
}