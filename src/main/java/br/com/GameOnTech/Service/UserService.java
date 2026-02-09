package br.com.GameOnTech.Service;

import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder; // Injetado pelo Spring Security

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    /*@Transactional
    public User createUser(User user) {
        // Validação simples: não permitir emails duplicados
        if (userRepository.findByUserEmail(user.getUserEmail()).isPresent()) {
            throw new RuntimeException("E-mail já cadastrado!");
        }

        // Criptografa a senha antes de salvar no MySQL
        user.setPassword(passwordEncoder.encode(user.getPassword()));

        return userRepository.save(user);
    }*/

    // somente gerente
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User findById(UUID id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado com o ID: " + id));
    }

    public User findByEmail(String email) {
        return userRepository.findByUserEmail(email)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado"));
    }
}