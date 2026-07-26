-- ============================================
-- Cetacean Key - Schema
-- PostgreSQL / Supabase
-- ============================================

-- 1. Tabela de taxonomia
CREATE TABLE subordens (
    id_subordem SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL
);

-- 2. Tabela principal de animais
CREATE TABLE animais (
    id_animal SERIAL PRIMARY KEY,
    nome_comum VARCHAR(100) NOT NULL,
    nome_cientifico VARCHAR(100) UNIQUE NOT NULL,
    genero VARCHAR(100) NOT NULL,
    id_subordem INT NOT NULL,
    url_imagem TEXT,
    FOREIGN KEY (id_subordem) REFERENCES subordens(id_subordem)
);

-- Para banco existente, rode:
-- ALTER TABLE animais ADD COLUMN url_imagem TEXT;

-- 3. Tabela com as perguntas da chave
CREATE TABLE caracteristicas (
    id_caract SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    grupo_anatomico VARCHAR(50) NOT NULL
);

-- 4. Tabela com as respostas possíveis
CREATE TABLE opcoes_caracteristica (
    id_opcao SERIAL PRIMARY KEY,
    id_caract INT NOT NULL,
    valor VARCHAR(100) NOT NULL,
    FOREIGN KEY (id_caract) REFERENCES caracteristicas(id_caract)
);

-- 5. Tabela de cruzamento (Muitos-para-Muitos)
CREATE TABLE animal_identificacao (
    id_animal INT NOT NULL,
    id_opcao INT NOT NULL,
    observacao VARCHAR(255),
    PRIMARY KEY (id_animal, id_opcao),
    FOREIGN KEY (id_animal) REFERENCES animais(id_animal) ON DELETE CASCADE,
    FOREIGN KEY (id_opcao) REFERENCES opcoes_caracteristica(id_opcao) ON DELETE CASCADE
);

-- 6. Tabela de favoritos (por usuario)
CREATE TABLE favoritos (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    id_animal INT NOT NULL REFERENCES animais(id_animal) ON DELETE CASCADE,
    criado_em TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(user_id, id_animal)
);

CREATE INDEX idx_favoritos_user ON favoritos(user_id);
CREATE INDEX idx_favoritos_animal ON favoritos(id_animal);

-- RLS
ALTER TABLE favoritos ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Usuarios leem apenas seus proprios favoritos"
  ON favoritos FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Usuarios inserem apenas seus proprios favoritos"
  ON favoritos FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Usuarios deletam apenas seus proprios favoritos"
  ON favoritos FOR DELETE USING (auth.uid() = user_id);
