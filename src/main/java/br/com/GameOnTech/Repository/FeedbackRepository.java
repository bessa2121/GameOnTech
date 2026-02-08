package br.com.GameOnTech.Repository;

import br.com.GameOnTech.Domain.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FeedbackRepository extends JpaRepository<Feedback,Long>{
    @Override
    Optional<Feedback> findById(Long id);
}
