package dev.tadyboii.wordle.backend.model

import java.util.*

data class UserDTO(
    val id: UUID?,
    val name : String,
    val email : String,
    val picture : String,
    val role : String
)