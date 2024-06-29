package dev.tadyboii.wordle.backend.service

import dev.tadyboii.wordle.backend.model.ScoreRecordDTO
import org.springframework.stereotype.Service
import dev.tadyboii.wordle.backend.repository.ScoreRepository
import java.util.*

@Service
class ScoreService(private val scoreRepository: ScoreRepository){

    fun getPlayerScoreRecords(id: UUID): List<ScoreRecordDTO> {
        return scoreRepository.getPlayerScoreRecords(id)
    }

    fun getHighScores(): List<ScoreRecordDTO> {
        return scoreRepository.getHighScores()
    }

    fun createScoreRecord(scoreRecordDTO: ScoreRecordDTO, id: UUID): ScoreRecordDTO {
        return scoreRepository.createScoreRecord(scoreRecordDTO, id)
    }

}