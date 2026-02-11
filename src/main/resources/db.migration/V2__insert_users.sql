-- Inserção de usuários padrão

INSERT INTO users (id, name, email, password, role) VALUES
('11111111-1111-1111-1111-111111111111', 'Administrador', 'admin@gameontech.com',
 '$2a$10$v46SobTf58ltK8cHztaUNOJzoPTk5saDhI6GKMGQXGlJiIXQQmxiy', 'ADMIN'),
('22222222-2222-2222-2222-222222222222', 'Colaborador', 'colaborador@gameontech.com',
 '$2a$10$v46SobTf58ltK8cHztaUNOJzoPTk5saDhI6GKMGQXGlJiIXQQmxiy', 'COLABORADOR');
