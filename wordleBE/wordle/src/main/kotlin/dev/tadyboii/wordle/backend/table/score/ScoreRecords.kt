package dev.tadyboii.wordle.backend.table.score

import dev.tadyboii.wordle.backend.table.user.UserProfiles
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.javatime.timestamp

object ScoreRecords: UUIDTable(name = "score_record"){
    val userId = reference("user_id", UserProfiles,
        onDelete = ReferenceOption.CASCADE,
        onUpdate = ReferenceOption.CASCADE
    )
    val score = integer("score")
    val words = text("words")
    val createdAt = timestamp("created_at")
}