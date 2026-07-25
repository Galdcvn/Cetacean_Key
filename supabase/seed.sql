-- ============================================
-- Cetacean Key - Seed
-- PostgreSQL / Supabase
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
-- 3. Caracteristicas
-- -------------------------------------------
INSERT INTO caracteristicas (id_caract, nome, grupo_anatomico) VALUES
(1, 'Tipo de Agua',       'Habitat'),
(2, 'Barbatana Dorsal',   'Nadadeiras'),
(3, 'Tamanho Maximo',     'Corpo'),
(4, 'Estado de Conservacao', 'Conservacao');

-- -------------------------------------------
-- 4. Opcoes por caracteristica
-- -------------------------------------------

-- Tipo de Agua (id_caract = 1)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(1,  1, 'Salgada'),
(2,  1, 'Doce');

-- Barbatana Dorsal (id_caract = 2)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(3,  2, 'Possui'),
(4,  2, 'Nao Possui');

-- Tamanho Maximo (id_caract = 3)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(5,  3, 'Ate 5 metros'),
(6,  3, '5 a 10 metros'),
(7,  3, '10 a 15 metros'),
(8,  3, '15 a 20 metros'),
(9,  3, '20 a 25 metros'),
(10, 3, 'Mais de 25 metros');

-- Estado de Conservacao (id_caract = 4)
INSERT INTO opcoes_caracteristica (id_opcao, id_caract, valor) VALUES
(11, 4, 'Seguro'),
(12, 4, 'Risco'),
(13, 4, 'Vulneravel'),
(14, 4, 'Extinto'),
(15, 4, 'Desconhecido');

-- -------------------------------------------
-- 5. Associacao Animal <-> Opcoes
-- -------------------------------------------
-- Cada animal recebe 4 registros: Agua, Barbatana, Tamanho, Conservacao

INSERT INTO animal_identificacao (id_animal, id_opcao) VALUES
-- Balaena mysticetus (1): Salgada, Nao Possui, 15-20m, Seguro
(1, 1), (1, 4), (1, 8), (1, 11),
-- Balaenoptera acutorostrata (2): Salgada, Possui, 5-10m, Seguro
(2, 1), (2, 3), (2, 6), (2, 11),
-- Balaenoptera bonaerensis (3): Salgada, Possui, 10-15m, Seguro
(3, 1), (3, 3), (3, 7), (3, 11),
-- Balaenoptera borealis (4): Salgada, Possui, 10-15m, Risco
(4, 1), (4, 3), (4, 7), (4, 12),
-- Balaenoptera edeni (5): Salgada, Possui, 10-15m, Seguro
(5, 1), (5, 3), (5, 7), (5, 11),
-- Balaenoptera musculus (6): Salgada, Possui, >25m, Risco
(6, 1), (6, 3), (6, 10), (6, 12),
-- Balaenoptera omurai (7): Salgada, Possui, 10-15m, Desconhecido
(7, 1), (7, 3), (7, 7), (7, 15),
-- Balaenoptera physalus (8): Salgada, Possui, 15-20m, Risco
(8, 1), (8, 3), (8, 8), (8, 12),
-- Caperea marginata (9): Salgada, Possui, 5-10m, Seguro
(9, 1), (9, 3), (9, 6), (9, 11),
-- Eschrichtius robustus (10): Salgada, Nao Possui, 10-15m, Seguro
(10, 1), (10, 4), (10, 7), (10, 11),
-- Eubalaena australis (11): Salgada, Nao Possui, 15-20m, Seguro
(11, 1), (11, 4), (11, 8), (11, 11),
-- Eubalaena glacialis (12): Salgada, Nao Possui, 15-20m, Risco
(12, 1), (12, 4), (12, 8), (12, 12),
-- Eubalaena japonica (13): Salgada, Nao Possui, 15-20m, Risco
(13, 1), (13, 4), (13, 8), (13, 12),
-- Megaptera novaeangliae (14): Salgada, Possui, 15-20m, Seguro
(14, 1), (14, 3), (14, 8), (14, 11),
-- Berardius arnuxii (15): Salgada, Possui, 10-15m, Seguro
(15, 1), (15, 3), (15, 7), (15, 11),
-- Berardius bairdii (16): Salgada, Possui, 10-15m, Seguro
(16, 1), (16, 3), (16, 7), (16, 11),
-- Berardius minimus (17): Salgada, Possui, 5-10m, Seguro
(17, 1), (17, 3), (17, 6), (17, 11),
-- Cephalorhynchus commersonii (18): Salgada, Possui, Ate 5m, Seguro
(18, 1), (18, 3), (18, 5), (18, 11),
-- Cephalorhynchus eutropia (19): Salgada, Possui, Ate 5m, Seguro
(19, 1), (19, 3), (19, 5), (19, 11),
-- Cephalorhynchus heavisidii (20): Salgada, Possui, Ate 5m, Seguro
(20, 1), (20, 3), (20, 5), (20, 11),
-- Cephalorhynchus hectori (21): Salgada, Possui, Ate 5m, Risco
(21, 1), (21, 3), (21, 5), (21, 12),
-- Delphinapterus leucas (22): Salgada, Nao Possui, 5-10m, Seguro
(22, 1), (22, 4), (22, 6), (22, 11),
-- Delphinus capensis (23): Salgada, Possui, Ate 5m, Desconhecido
(23, 1), (23, 3), (23, 5), (23, 15),
-- Delphinus delphis (24): Salgada, Possui, Ate 5m, Seguro
(24, 1), (24, 3), (24, 5), (24, 11),
-- Feresa attenuata (25): Salgada, Possui, Ate 5m, Risco
(25, 1), (25, 3), (25, 5), (25, 12),
-- Globicephala macrorhynchus (26): Salgada, Possui, 5-10m, Seguro
(26, 1), (26, 3), (26, 6), (26, 11),
-- Globicephala melas (27): Salgada, Possui, 5-10m, Seguro
(27, 1), (27, 3), (27, 6), (27, 11),
-- Grampus griseus (28): Salgada, Possui, Ate 5m, Seguro
(28, 1), (28, 3), (28, 5), (28, 11),
-- Hyperoodon ampullatus (29): Salgada, Possui, 5-10m, Seguro
(29, 1), (29, 3), (29, 6), (29, 11),
-- Hyperoodon planifrons (30): Salgada, Possui, 10-15m, Seguro
(30, 1), (30, 3), (30, 7), (30, 11),
-- Indopacetus pacificus (31): Salgada, Possui, 5-10m, Seguro
(31, 1), (31, 3), (31, 6), (31, 11),
-- Inia araguaiaensis (32): Doce, Nao Possui, Ate 5m, Desconhecido
(32, 2), (32, 4), (32, 5), (32, 15),
-- Inia boliviensis (33): Doce, Possui, Ate 5m, Desconhecido
(33, 2), (33, 3), (33, 5), (33, 15),
-- Inia geoffrensis (34): Doce, Possui, Ate 5m, Risco
(34, 2), (34, 3), (34, 5), (34, 12),
-- Kogia breviceps (35): Salgada, Nao Possui, Ate 5m, Seguro
(35, 1), (35, 4), (35, 5), (35, 11),
-- Kogia sima (36): Salgada, Possui, Ate 5m, Seguro
(36, 1), (36, 3), (36, 5), (36, 11),
-- Lagenodelphis hosei (37): Salgada, Possui, Ate 5m, Seguro
(37, 1), (37, 3), (37, 5), (37, 11),
-- Lagenorhynchus acutus (38): Salgada, Possui, Ate 5m, Seguro
(38, 1), (38, 3), (38, 5), (38, 11),
-- Lagenorhynchus albirostris (39): Salgada, Possui, Ate 5m, Seguro
(39, 1), (39, 3), (39, 5), (39, 11),
-- Lagenorhynchus australis (40): Salgada, Possui, Ate 5m, Seguro
(40, 1), (40, 3), (40, 5), (40, 11),
-- Lagenorhynchus cruciger (41): Salgada, Possui, Ate 5m, Seguro
(41, 1), (41, 3), (41, 5), (41, 11),
-- Lagenorhynchus obliquidens (42): Salgada, Possui, Ate 5m, Seguro
(42, 1), (42, 3), (42, 5), (42, 11),
-- Lagenorhynchus obscurus (43): Salgada, Possui, Ate 5m, Seguro
(43, 1), (43, 3), (43, 5), (43, 11),
-- Lipotes vexillifer (44): Doce, Possui, Ate 5m, Extinto
(44, 2), (44, 3), (44, 5), (44, 14);
