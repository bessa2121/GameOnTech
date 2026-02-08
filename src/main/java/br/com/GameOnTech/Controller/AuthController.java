package br.com.GameOnTech.Controller;

import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Dto.UserRequestDTO;
import br.com.GameOnTech.Dto.UserResponseDTO;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

    private final AuthenticationManager authenticationManager;

    public AuthController(AuthenticationManager authenticationManager) {
        this.authenticationManager = authenticationManager;
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponseDTO> authenticateUser(
            @RequestBody UserRequestDTO userRequestDTO
    ) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        userRequestDTO.userEmail(),
                        userRequestDTO.password()
                )
        );

        User user = (User) authentication.getPrincipal();

        UserResponseDTO response = new UserResponseDTO(
                user.getUserEmail()
        );

        return ResponseEntity.ok(response);
    }

}
