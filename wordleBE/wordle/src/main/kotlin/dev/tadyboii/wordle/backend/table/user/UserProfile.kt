package dev.tadyboii.wordle.backend.table.user

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.EntityID
import java.util.*


class UserProfile(id: EntityID<UUID>) : UUIDEntity(id) {
    companion object : UUIDEntityClass<UserProfile>(UserProfiles)

    var name by UserProfiles.name
    var email by UserProfiles.email
    var picture by UserProfiles.picture
    var role by UserProfiles.role
}