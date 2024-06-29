package dev.tadyboii.wordle.backend.model

import dev.tadyboii.wordle.backend.table.user.UserProfile

fun UserProfile.toDTO() = UserDTO(
    id = id.value,
    name = name,
    email = email,
    picture = picture ?: "",
    role = role
)

fun UserDTO.createEntity() = UserProfile.new {
    val userDTO = this@createEntity
    name = userDTO.name
    email = userDTO.email
    picture = userDTO.picture
    role = userDTO.role
}
