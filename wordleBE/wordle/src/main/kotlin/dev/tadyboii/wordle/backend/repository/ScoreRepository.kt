package dev.tadyboii.wordle.backend.repository

import dev.tadyboii.wordle.backend.model.ScoreRecordDTO
import dev.tadyboii.wordle.backend.model.createEntity
import dev.tadyboii.wordle.backend.model.toDTO
import dev.tadyboii.wordle.backend.table.score.ScoreRecord
import dev.tadyboii.wordle.backend.table.score.ScoreRecords
import org.jetbrains.exposed.sql.transactions.transaction
import org.springframework.stereotype.Repository
import java.util.UUID


@Repository
class ScoreRepository {

    fun getPlayerScoreRecords(id: UUID): List<ScoreRecordDTO> {
        return transaction {
            ScoreRecord.find { ScoreRecords.userId eq id }.map { it.toDTO() }
        }
    }

    fun getHighScores(): List<ScoreRecordDTO> {
        return transaction {
            ScoreRecord.all().sortedByDescending { it.score }.map { it.toDTO() }
        }
    }

    fun createScoreRecord(scoreRecordDTO: ScoreRecordDTO, id: UUID): ScoreRecordDTO {
        return transaction {
            val scoreRecord = scoreRecordDTO.createEntity(id)
            scoreRecord.toDTO()
        }
    }
}