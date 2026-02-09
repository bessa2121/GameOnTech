package br.com.GameOnTech.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/login")
    public String login() {
        return "index"; // ou login.html se existir
    }

    @GetMapping("/chat")
    public String chat() {
        return "chat";
    }

    @GetMapping("/cronograma")
    public String cronograma() {
        return "cronograma";
    }

    @GetMapping("/politicas")
    public String politicas() {
        return "politicas";
    }

    @GetMapping("/trabalhos")
    public String trabalhos() {
        return "trabalhos";
    }

    @GetMapping("/treinamento")
    public String treinamento() {
        return "treinamento";
    }

    @GetMapping("/logs")
    public String logs() {
        return "logs";
    }

    @GetMapping("/feedback")
    public String feedback() {
        return "feedback";
    }

    @GetMapping("/conversa-gerente")
    public String conversaGerente() {
        return "conversa-gerente";
    }

    @GetMapping("/tarefas")
    public String tarefas() {
        return "tarefas";
    }

}
