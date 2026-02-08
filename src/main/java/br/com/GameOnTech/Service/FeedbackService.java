package br.com.GameOnTech.Service;

import br.com.GameOnTech.Domain.Feedback;
import br.com.GameOnTech.Domain.FeedbackStatus;
import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Repository.FeedbackRepository;
import org.springframework.stereotype.Service;

@Service
public class FeedbackService {

    private final FeedbackRepository feedbackRepository;

    public FeedbackService(FeedbackRepository feedbackRepository) {
        this.feedbackRepository = feedbackRepository;
    }

    // Estagiário envia
    public Feedback sendFeedback(
            User sender,
            User receiver,
            String title,
            String message
    ) {
        Feedback feedback = new Feedback();
        feedback.setSender(sender);
        feedback.setReceiver(receiver);
        feedback.setTitle(title);
        feedback.setMessage(message);
        feedback.setStatus(FeedbackStatus.ABERTO);

        return feedbackRepository.save(feedback);
    }

    // Gerente responde
    public Feedback responseFeedback(
            Long feedbackId,
            String responseText
    ) {
        Feedback feedback = feedbackRepository.findById(feedbackId)
                .orElseThrow(() -> new RuntimeException("Feedback não encontrado"));

        feedback.setResponse(responseText);
        feedback.setStatus(FeedbackStatus.FECHADO);

        return feedbackRepository.save(feedback);
    }
}
