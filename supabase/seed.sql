-- ============================================
-- Cetacean Key - Seed
-- PostgreSQL / Supabase
-- 16 Caracteristicas · 55 Opcoes · 44 Animais
-- ============================================

-- -------------------------------------------
-- 1. Subordens
-- -------------------------------------------
INSERT INTO subordens (id_subordem, nome) VALUES
(1, 'Mysticeti'),
(2, 'Odontoceti');

-- -------------------------------------------
-- 2. Animais
-- -------------------------------------------
INSERT INTO animais (id_animal, nome_comum, nome_cientifico, genero, id_subordem) VALUES
-- Mysticeti
(1,  'Baleia-da-Groenlandia',             'Balaena mysticetus',              'Balaena',        1),
(2,  'Baleia-ana',                        'Balaenoptera acutorostrata',       'Balaenoptera',   1),
(3,  'Baleia-minke-antarctica',           'Balaenoptera bonaerensis',        'Balaenoptera',   1),
(4,  'Baleia-sei',                        'Balaenoptera borealis',           'Balaenoptera',   1),
(5,  'Baleia-de-bryde',                   'Balaenoptera edeni',              'Balaenoptera',   1),
(6,  'Baleia-azul',                       'Balaenoptera musculus',           'Balaenoptera',   1),
(7,  'Baleia-de-Omura',                   'Balaenoptera omurai',             'Balaenoptera',   1),
(8,  'Baleia-comum',                      'Balaenoptera physalus',           'Balaenoptera',   1),
(9,  'Baleia-franca-pigmeia',             'Caperea marginata',               'Caperea',        1),
(10, 'Baleia-cinzenta',                   'Eschrichtius robustus',           'Eschrichtius',   1),
(11, 'Baleia-franca-austral',             'Eubalaena australis',             'Eubalaena',      1),
(12, 'Baleia-franca-do-atlantico-norte',  'Eubalaena glacialis',             'Eubalaena',      1),
(13, 'Baleia-franca-do-pacifico',         'Eubalaena japonica',              'Eubalaena',      1),
(14, 'Baleia-jubarte',                    'Megaptera novaeangliae',          'Megaptera',      1),
-- Odontoceti
(15, 'Baleia-bicuda-de-arnoux',           'Berardius arnuxii',               'Berardius',      2),
(16, 'Baleia-bicuda-de-baird',            'Berardius bairdii',               'Berardius',      2),
(17, 'Baleia-bicuda-de-sato',             'Berardius minimus',               'Berardius',      2),
(18, 'Golfinho-de-commerson',             'Cephalorhynchus commersonii',     'Cephalorhynchus',2),
(19, 'Golfinho-chileno',                  'Cephalorhynchus eutropia',        'Cephalorhynchus',2),
(20, 'Golfinho-de-heaviside',             'Cephalorhynchus heavisidii',      'Cephalorhynchus',2),
(21, 'Golfinho-de-hector',                'Cephalorhynchus hectori',         'Cephalorhynchus',2),
(22, 'Beluga',                            'Delphinapterus leucas',           'Delphinapterus', 2),
(23, 'Golfinho-comum-de-bico-longo',      'Delphinus capensis',              'Delphinus',      2),
(24, 'Golfinho-comum-de-bico-curto',      'Delphinus delphis',               'Delphinus',      2),
(25, 'Orca-pigmeia',                      'Feresa attenuata',                'Feresa',         2),
(26, 'Baleia-piloto-de-aleta-curta',      'Globicephala macrorhynchus',      'Globicephala',   2),
(27, 'Baleia-piloto-de-aleta-longa',      'Globicephala melas',              'Globicephala',   2),
(28, 'Golfinho-de-risso',                 'Grampus griseus',                 'Grampus',        2),
(29, 'Baleia-bicuda-de-cabeca-plana-do-norte','Hyperoodon ampullatus',       'Hyperoodon',     2),
(30, 'Baleia-bicuda-de-cabeca-plana-do-sul', 'Hyperoodon planifrons',       'Hyperoodon',     2),
(31, 'Baleia-bicuda-de-longman',          'Indopacetus pacificus',           'Indopacetus',    2),
(32, 'Boto-do-araguaia',                  'Inia araguaiaensis',              'Inia',           2),
(33, 'Boto-da-Bolivia',                   'Inia boliviensis',                'Inia',           2),
(34, 'Boto-cor-de-Rosa',                  'Inia geoffrensis',                'Inia',           2),
(35, 'Cachalote-pigmeu',                  'Kogia breviceps',                 'Kogia',          2),
(36, 'Cachalote-anao',                    'Kogia sima',                      'Kogia',          2),
(37, 'Golfinho-de-fraser',                'Lagenodelphis hosei',             'Lagenodelphis',  2),
(38, 'Golfinho-de-laterais-brancas-do-atlantico', 'Lagenorhynchus acutus',  'Lagenorhynchus', 2),
(39, 'Golfinho-de-bico-branco',           'Lagenorhynchus albirostris',      'Lagenorhynchus', 2),
(40, 'Golfinho-do-sul',                   'Lagenorhynchus australis',        'Lagenorhynchus', 2),
(41, 'Golfinho-cruzado',                  'Lagenorhynchus cruciger',         'Lagenorhynchus', 2),
(42, 'Golfinho-de-laterais-brancas-do-pacifico', 'Lagenorhynchus obliquidens', 'Lagenorhynchus',2),
(43, 'Golfinho-cinzento',                 'Lagenorhynchus obscurus',         'Lagenorhynchus', 2),
(44, 'Baiji',                             'Lipotes vexillifer',              'Lipotes',        2);

-- -------------------------------------------
-- 3. Caracteristicas (16 total)
-- -------------------------------------------
INSERT INTO caracteristicas (id_caract, nome, grupo_anatomico) VALUES
(1,  'Aparato Alimentar',               'Boca'),
(2,  'Espiraculos e Borrifo',           'Respiracao'),
(3,  'Sulcos Ventrais',                 'Corpo'),
(4,  'Nadadeira Dorsal',                'Nadadeiras'),
(5,  'Nadadeiras Peitorais/Caudal',      'Nadadeiras'),
(6,  'Cabeca e Rostro',                 'Cabeca'),
(7,  'Coloracao e Marcas',              'Coloracao'),
(8,  'Tamanho Corporal',                'Corpo'),
(9,  'Forma do Corpo',                  'Corpo'),
(10, 'Habitat',                          'Ecologia'),
(11, 'Numero de Dentes',                'Boca'),
(12, 'Cobertura de Barbatanas',         'Boca'),
(13, 'Presenca de Calosidades',         'Cabeca'),
(14, 'Rugosidade da Pele',              'Corpo'),
(15, 'Comportamento na Superficie',      'Comportamento'),
(16, 'Formato da Cauda',                'Nadadeiras');

-- -------------------------------------------
-- 4. Opcoes por caracteristica (55 total)
-- -------------------------------------------

-- C1: Aparato Alimentar (2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(1,  1, 'Barbatanas baleares'),
(2,  1, 'Dentes');

-- C2: Espiraculos e Borrifo (5)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(3,  2, 'Dois espiraculos, borrifo em V'),
(4,  2, 'Dois espiraculos, borrifo colunar alto'),
(5,  2, 'Dois espiraculos, borrifo baixo e difuso'),
(6,  2, 'Dois espiraculos, borrifo pequeno e bilateral'),
(7,  2, 'Um espiraculo, borrifo singular e pequeno');

-- C3: Sulcos Ventrais (2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(8,  3, 'Presentes e extensivos'),
(9,  3, 'Ausentes ou reduzidos');

-- C4: Nadadeira Dorsal (4)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(10, 4, 'Ausente'),
(11, 4, 'Pequena e falcada'),
(12, 4, 'Grande e proeminente'),
(13, 4, 'Reduzida e posicionada posteriormente');

-- C5: Nadadeiras Peitorais/Caudal (3)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(14, 5, 'Muito longas (>= 1/3 do corpo)'),
(15, 5, 'Arredondadas ou formato de pa'),
(16, 5, 'Falcadas e alongadas');

-- C6: Cabeca e Rostro (5)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(17, 6, 'Mandibula superior arqueada (sem bico)'),
(18, 6, 'Cabeca achatada (largura > comprimento)'),
(19, 6, 'Melon bulboso e proeminente'),
(20, 6, 'Bico comprido e estreito'),
(21, 6, 'Cabeca arredondada (sem bico longo)');

-- C7: Coloracao e Marcas (5)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(22, 7, 'Escura uniforme'),
(23, 7, 'Contraste dorsal-ventral'),
(24, 7, 'Marcas brancas proeminentes'),
(25, 7, 'Moteada (manchas irregulares)'),
(26, 7, 'Cinza claro uniforme');

-- C8: Tamanho Corporal (5)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(27, 8, 'Muito grande (>= 20m)'),
(28, 8, 'Grande (15-20m)'),
(29, 8, 'Medio (10-15m)'),
(30, 8, 'Pequeno (5-10m)'),
(31, 8, 'Muito pequeno (< 5m)');

-- C9: Forma do Corpo (3)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(32, 9, 'Robusto e macico'),
(33, 9, 'Esguio e hidrodinamico'),
(34, 9, 'Compresso lateralmente');

-- C10: Habitat (2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(35, 10, 'Agua doce'),
(36, 10, 'Agua salgada');

-- C11: Numero de Dentes (4)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(37, 11, 'Ausente'),
(38, 11, 'Poucos (1-26)'),
(39, 11, 'Moderados (27-60)'),
(40, 11, 'Muitos (> 60)');

-- C12: Cobertura de Barbatanas (4)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(41, 12, 'Ausente'),
(42, 12, 'Curta e clara (ate 30cm)'),
(43, 12, 'Media e escura (30-100cm)'),
(44, 12, 'Longa e escura (> 100cm)');

-- C13: Presenca de Calosidades (2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(45, 13, 'Presentes'),
(46, 13, 'Ausentes');

-- C14: Rugosidade da Pele (2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(47, 14, 'Enrugada ou com cicatrizes'),
(48, 14, 'Lisa');

-- C15: Comportamento na Superficie (4)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(49, 15, 'Arqueia as costas ao mergulhar'),
(50, 15, 'Ergue a cauda ao mergulhar'),
(51, 15, 'Raramente arqueia ou ergue a cauda'),
(52, 15, 'Comportamento variado ou pouco documentado');

-- C16: Formato da Cauda (3)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(53, 16, 'Chanfradura mediana presente, bordas lisas'),
(54, 16, 'Sem chanfradura, bordas serrilhadas'),
(55, 16, 'Chanfradura variavel, bordas mistas');

-- -------------------------------------------
-- 5. Associacao Animal <-> Opcoes
-- 44 animais x 16 caracteristicas = 704 linhas
-- -------------------------------------------

INSERT INTO animal_identificacao (id_animal, id_opcao) VALUES
-- Balaena mysticetus (1)
(1, 1),  (1, 3),  (1, 9),  (1, 10), (1, 15), (1, 17), (1, 25), (1, 28),
(1, 32), (1, 36), (1, 37), (1, 44), (1, 45), (1, 48), (1, 49), (1, 54),

-- Balaenoptera acutorostrata (2)
(2, 1),  (2, 4),  (2, 8),  (2, 11), (2, 16), (2, 18), (2, 23), (2, 30),
(2, 33), (2, 36), (2, 37), (2, 42), (2, 46), (2, 48), (2, 51), (2, 55),

-- Balaenoptera bonaerensis (3)
(3, 1),  (3, 4),  (3, 8),  (3, 11), (3, 16), (3, 18), (3, 23), (3, 29),
(3, 33), (3, 36), (3, 37), (3, 42), (3, 46), (3, 48), (3, 51), (3, 55),

-- Balaenoptera borealis (4)
(4, 1),  (4, 4),  (4, 8),  (4, 12), (4, 16), (4, 18), (4, 23), (4, 29),
(4, 33), (4, 36), (4, 37), (4, 43), (4, 46), (4, 48), (4, 51), (4, 55),

-- Balaenoptera edeni (5)
(5, 1),  (5, 4),  (5, 8),  (5, 11), (5, 16), (5, 18), (5, 23), (5, 29),
(5, 33), (5, 36), (5, 37), (5, 43), (5, 46), (5, 48), (5, 51), (5, 55),

-- Balaenoptera musculus (6)
(6, 1),  (6, 4),  (6, 8),  (6, 11), (6, 16), (6, 18), (6, 23), (6, 27),
(6, 32), (6, 36), (6, 37), (6, 44), (6, 46), (6, 48), (6, 51), (6, 55),

-- Balaenoptera omurai (7)
(7, 1),  (7, 4),  (7, 8),  (7, 11), (7, 16), (7, 18), (7, 23), (7, 29),
(7, 33), (7, 36), (7, 37), (7, 43), (7, 46), (7, 48), (7, 51), (7, 55),

-- Balaenoptera physalus (8)
(8, 1),  (8, 4),  (8, 8),  (8, 12), (8, 16), (8, 18), (8, 23), (8, 27),
(8, 32), (8, 36), (8, 37), (8, 43), (8, 46), (8, 48), (8, 51), (8, 55),

-- Caperea marginata (9)
(9, 1),  (9, 6),  (9, 9),  (9, 11), (9, 15), (9, 21), (9, 26), (9, 30),
(9, 34), (9, 36), (9, 37), (9, 44), (9, 46), (9, 48), (9, 52), (9, 55),

-- Eschrichtius robustus (10)
(10, 1), (10, 5), (10, 9), (10, 10), (10, 15), (10, 18), (10, 25), (10, 29),
(10, 32), (10, 36), (10, 37), (10, 44), (10, 46), (10, 48), (10, 49), (10, 55),

-- Eubalaena australis (11)
(11, 1), (11, 3), (11, 9), (11, 10), (11, 15), (11, 17), (11, 22), (11, 28),
(11, 32), (11, 36), (11, 37), (11, 44), (11, 45), (11, 48), (11, 49), (11, 54),

-- Eubalaena glacialis (12)
(12, 1), (12, 3), (12, 9), (12, 10), (12, 15), (12, 17), (12, 22), (12, 28),
(12, 32), (12, 36), (12, 37), (12, 44), (12, 45), (12, 48), (12, 49), (12, 54),

-- Eubalaena japonica (13)
(13, 1), (13, 3), (13, 9), (13, 10), (13, 15), (13, 17), (13, 22), (13, 28),
(13, 32), (13, 36), (13, 37), (13, 44), (13, 45), (13, 48), (13, 49), (13, 54),

-- Megaptera novaeangliae (14)
(14, 1), (14, 4), (14, 8), (14, 13), (14, 14), (14, 21), (14, 23), (14, 28),
(14, 33), (14, 36), (14, 37), (14, 44), (14, 46), (14, 48), (14, 50), (14, 53),

-- Berardius arnuxii (15)
(15, 2), (15, 7), (15, 9), (15, 13), (15, 15), (15, 20), (15, 22), (15, 29),
(15, 34), (15, 36), (15, 38), (15, 41), (15, 46), (15, 48), (15, 50), (15, 53),

-- Berardius bairdii (16)
(16, 2), (16, 7), (16, 9), (16, 13), (16, 15), (16, 20), (16, 22), (16, 29),
(16, 34), (16, 36), (16, 38), (16, 41), (16, 46), (16, 48), (16, 50), (16, 53),

-- Berardius minimus (17)
(17, 2), (17, 7), (17, 9), (17, 13), (17, 15), (17, 20), (17, 22), (17, 30),
(17, 34), (17, 36), (17, 38), (17, 41), (17, 46), (17, 48), (17, 50), (17, 53),

-- Cephalorhynchus commersonii (18)
(18, 2), (18, 7), (18, 9), (18, 11), (18, 16), (18, 21), (18, 24), (18, 31),
(18, 33), (18, 36), (18, 39), (18, 41), (18, 46), (18, 48), (18, 52), (18, 53),

-- Cephalorhynchus eutropia (19)
(19, 2), (19, 7), (19, 9), (19, 11), (19, 16), (19, 21), (19, 22), (19, 31),
(19, 33), (19, 36), (19, 39), (19, 41), (19, 46), (19, 48), (19, 52), (19, 53),

-- Cephalorhynchus heavisidii (20)
(20, 2), (20, 7), (20, 9), (20, 11), (20, 16), (20, 21), (20, 23), (20, 31),
(20, 33), (20, 36), (20, 39), (20, 41), (20, 46), (20, 48), (20, 52), (20, 53),

-- Cephalorhynchus hectori (21)
(21, 2), (21, 7), (21, 9), (21, 11), (21, 16), (21, 21), (21, 23), (21, 31),
(21, 33), (21, 36), (21, 39), (21, 41), (21, 46), (21, 48), (21, 52), (21, 53),

-- Delphinapterus leucas (22)
(22, 2), (22, 7), (22, 9), (22, 10), (22, 15), (22, 21), (22, 26), (22, 30),
(22, 33), (22, 36), (22, 39), (22, 41), (22, 46), (22, 48), (22, 50), (22, 53),

-- Delphinus capensis (23)
(23, 2), (23, 7), (23, 9), (23, 12), (23, 16), (23, 20), (23, 24), (23, 31),
(23, 33), (23, 36), (23, 40), (23, 41), (23, 46), (23, 48), (23, 50), (23, 53),

-- Delphinus delphis (24)
(24, 2), (24, 7), (24, 9), (24, 12), (24, 16), (24, 20), (24, 24), (24, 31),
(24, 33), (24, 36), (24, 40), (24, 41), (24, 46), (24, 48), (24, 50), (24, 53),

-- Feresa attenuata (25)
(25, 2), (25, 7), (25, 9), (25, 11), (25, 16), (25, 21), (25, 22), (25, 31),
(25, 33), (25, 36), (25, 39), (25, 41), (25, 46), (25, 48), (25, 50), (25, 53),

-- Globicephala macrorhynchus (26)
(26, 2), (26, 7), (26, 9), (26, 12), (26, 16), (26, 19), (26, 22), (26, 30),
(26, 33), (26, 36), (26, 39), (26, 41), (26, 46), (26, 48), (26, 50), (26, 53),

-- Globicephala melas (27)
(27, 2), (27, 7), (27, 9), (27, 12), (27, 16), (27, 19), (27, 22), (27, 30),
(27, 33), (27, 36), (27, 39), (27, 41), (27, 46), (27, 48), (27, 50), (27, 53),

-- Grampus griseus (28)
(28, 2), (28, 7), (28, 9), (28, 12), (28, 16), (28, 21), (28, 25), (28, 31),
(28, 33), (28, 36), (28, 39), (28, 41), (28, 46), (28, 47), (28, 50), (28, 53),

-- Hyperoodon ampullatus (29)
(29, 2), (29, 7), (29, 9), (29, 13), (29, 16), (29, 19), (29, 22), (29, 30),
(29, 34), (29, 36), (29, 38), (29, 41), (29, 46), (29, 47), (29, 50), (29, 53),

-- Hyperoodon planifrons (30)
(30, 2), (30, 7), (30, 9), (30, 13), (30, 16), (30, 19), (30, 22), (30, 29),
(30, 34), (30, 36), (30, 38), (30, 41), (30, 46), (30, 48), (30, 50), (30, 53),

-- Indopacetus pacificus (31)
(31, 2), (31, 7), (31, 9), (31, 13), (31, 16), (31, 20), (31, 22), (31, 30),
(31, 33), (31, 36), (31, 38), (31, 41), (31, 46), (31, 48), (31, 50), (31, 53),

-- Inia araguaiaensis (32)
(32, 2), (32, 7), (32, 9), (32, 10), (32, 15), (32, 20), (32, 22), (32, 31),
(32, 33), (32, 35), (32, 39), (32, 41), (32, 46), (32, 48), (32, 52), (32, 53),

-- Inia boliviensis (33)
(33, 2), (33, 7), (33, 9), (33, 10), (33, 15), (33, 20), (33, 22), (33, 31),
(33, 33), (33, 35), (33, 39), (33, 41), (33, 46), (33, 48), (33, 52), (33, 53),

-- Inia geoffrensis (34)
(34, 2), (34, 7), (34, 9), (34, 10), (34, 15), (34, 20), (34, 22), (34, 31),
(34, 33), (34, 35), (34, 39), (34, 41), (34, 46), (34, 48), (34, 52), (34, 53),

-- Kogia breviceps (35)
(35, 2), (35, 7), (35, 9), (35, 10), (35, 15), (35, 19), (35, 22), (35, 31),
(35, 34), (35, 36), (35, 38), (35, 41), (35, 46), (35, 48), (35, 50), (35, 53),

-- Kogia sima (36)
(36, 2), (36, 7), (36, 9), (36, 11), (36, 16), (36, 19), (36, 22), (36, 31),
(36, 34), (36, 36), (36, 38), (36, 41), (36, 46), (36, 48), (36, 50), (36, 53),

-- Lagenodelphis hosei (37)
(37, 2), (37, 7), (37, 9), (37, 11), (37, 16), (37, 20), (37, 23), (37, 31),
(37, 33), (37, 36), (37, 40), (37, 41), (37, 46), (37, 48), (37, 52), (37, 53),

-- Lagenorhynchus acutus (38)
(38, 2), (38, 7), (38, 9), (38, 11), (38, 16), (38, 21), (38, 24), (38, 31),
(38, 33), (38, 36), (38, 40), (38, 41), (38, 46), (38, 48), (38, 52), (38, 53),

-- Lagenorhynchus albirostris (39)
(39, 2), (39, 7), (39, 9), (39, 11), (39, 16), (39, 21), (39, 23), (39, 31),
(39, 33), (39, 36), (39, 40), (39, 41), (39, 46), (39, 48), (39, 52), (39, 53),

-- Lagenorhynchus australis (40)
(40, 2), (40, 7), (40, 9), (40, 11), (40, 16), (40, 21), (40, 24), (40, 31),
(40, 33), (40, 36), (40, 40), (40, 41), (40, 46), (40, 48), (40, 52), (40, 53),

-- Lagenorhynchus cruciger (41)
(41, 2), (41, 7), (41, 9), (41, 11), (41, 16), (41, 21), (41, 24), (41, 31),
(41, 33), (41, 36), (41, 40), (41, 41), (41, 46), (41, 48), (41, 52), (41, 53),

-- Lagenorhynchus obliquidens (42)
(42, 2), (42, 7), (42, 9), (42, 11), (42, 16), (42, 21), (42, 24), (42, 31),
(42, 33), (42, 36), (42, 40), (42, 41), (42, 46), (42, 48), (42, 52), (42, 53),

-- Lagenorhynchus obscurus (43)
(43, 2), (43, 7), (43, 9), (43, 11), (43, 16), (43, 21), (43, 23), (43, 31),
(43, 33), (43, 36), (43, 40), (43, 41), (43, 46), (43, 48), (43, 52), (43, 53),

-- Lipotes vexillifer (44)
(44, 2), (44, 7), (44, 9), (44, 10), (44, 15), (44, 20), (44, 23), (44, 31),
(44, 33), (44, 35), (44, 39), (44, 41), (44, 46), (44, 48), (44, 52), (44, 53);
