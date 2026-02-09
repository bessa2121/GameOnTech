package br.com.GameOnTech.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(
            AuthenticationConfiguration authenticationConfiguration
    ) throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())
                .sessionManagement(session ->
                        session.sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                )
                .authorizeHttpRequests(auth -> auth
                        // 🔓 páginas públicas
                        .requestMatchers(
                                "/",
                                "/login",
                                "/home",
                                "/chat",
                                "/cronograma",
                                "/politicas",
                                "/trabalhos",
                                "/treinamento",
                                "/logs"
                        ).permitAll()

                        // 🔓 arquivos estáticos (ajustado para caminhos resolvidos pelo Thymeleaf)
                        .requestMatchers(
                                "/css/**",  // Permite /css/palette.css, etc.
                                "/js/**",   // Permite /js/progress-chart.js, etc.
                                "/assets/**"  // Permite /assets/front.png, /assets/*.svg, etc.
                        ).permitAll()

                        // 🔓 API pública (mesmo sem JWT, permite endpoints)
                        .requestMatchers(HttpMethod.POST, "/auth/login").permitAll()
                        .requestMatchers(HttpMethod.POST, "/users").permitAll()

                        // 🔓 Permite tudo o resto (remove proteção, deixa público)
                        .anyRequest().permitAll()
                );

        return http.build();
    }
}