package br.com.GameOnTech.Config;

import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Domain.UserRole;
import br.com.GameOnTech.Repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@Profile("dev") // roda só em desenvolvimento (RECOMENDADO)
public class DataLoader implements CommandLineRunner {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public DataLoader(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public void run(String... args) {

        criarUsuarioSeNaoExistir(
                "admin@gameontech.com",
                "123",
                UserRole.ADMIN
        );

        criarUsuarioSeNaoExistir(
                "colaborador@gameontech.com",
                "123",
                UserRole.COLABORADOR
        );

        System.out.println("✅ Usuários padrão verificados/criados com sucesso!");
    }

    private void criarUsuarioSeNaoExistir(String email, String senha, UserRole role) {

        if (userRepository.findByUserEmail(email).isEmpty()) {

            User user = new User();
            user.setUserEmail(email);
            user.setPassword(passwordEncoder.encode(senha));
            user.setRole(role);

            userRepository.save(user);
        }
    }
}
