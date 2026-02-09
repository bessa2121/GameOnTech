package br.com.GameOnTech.Controller;

import br.com.GameOnTech.Dto.UserRequestDTO;
import br.com.GameOnTech.Dto.UserResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> login(@RequestBody UserRequestDTO request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(
                            request.userEmail(),
                            request.password()
                    )
            );
            // Sucesso: retornar UserResponseDTO com status 200
            UserResponseDTO response = new UserResponseDTO("Login efetuado", true);
            return ResponseEntity.ok(response);
        } catch (AuthenticationException e) {
            // Erro: retornar UserResponseDTO com status 401
            UserResponseDTO response = new UserResponseDTO("Email ou Senha inválido", false);
            return ResponseEntity.status(401).body(response);
        }
    }
}