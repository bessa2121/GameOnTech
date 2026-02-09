package br.com.GameOnTech.Controller;

import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    /*
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        try {
            return userService.createUser(user);
        } catch (Exception e) {
            throw new RuntimeException("Error creating user: " + e.getMessage());
        }
    }
    */

    // Somente gerente futuramente (adicione @PreAuthorize("hasRole('GERENTE')") se usar roles)
    @GetMapping("/getAll")
    public List<User> getAllUsers() {
        try {
            return userService.getAllUsers();
        } catch (Exception e) {
            throw new RuntimeException("Error fetching users: " + e.getMessage());
        }
    }
}