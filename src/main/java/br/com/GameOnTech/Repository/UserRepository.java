package br.com.GameOnTech.Repository;

import br.com.GameOnTech.Domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<User> findByUserEmail(String email);
}
