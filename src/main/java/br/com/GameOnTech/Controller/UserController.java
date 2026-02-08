package br.com.GameOnTech.Controller;

import br.com.GameOnTech.Domain.User;
import br.com.GameOnTech.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public User createUser(@RequestBody User user) {
        // A senha será codificada dentro do UserService
        return userService.createUser(user);
    }

    // somente gerente futuramente
    @GetMapping ("/getAll")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }
}