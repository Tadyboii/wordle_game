package dev.tadyboii.wordle.backend.table.user

import org.jetbrains.exposed.dao.id.UUIDTable

object UserProfiles: UUIDTable(name = "user_profile"){
    val name = text("name")
    val email = text("email")
    val picture = text("picture").nullable()
    val role = text("role")
}