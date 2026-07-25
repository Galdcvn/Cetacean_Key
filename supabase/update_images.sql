-- Execute este SQL no Supabase SQL Editor para atualizar as imagens

-- 1. Adicionar coluna se nao existir
ALTER TABLE animais ADD COLUMN IF NOT EXISTS url_imagem TEXT;

-- 2. Atualizar URLs com fotos reais do Wikimedia Commons (640px thumbnails)
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bowhead_Whale_NOAA.jpg/640px-Bowhead_Whale_NOAA.jpg' WHERE id_animal = 1;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/SBNMS_-_Minke_Whale_-_Breach_%2828670557361%29.jpg/640px-SBNMS_-_Minke_Whale_-_Breach_%2828670557361%29.jpg' WHERE id_animal = 2;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Minke_whale_in_ross_sea.jpg/640px-Minke_whale_in_ross_sea.jpg' WHERE id_animal = 3;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Sei_whale_mother_and_calf_Christin_Khan_NOAA.jpg/640px-Sei_whale_mother_and_calf_Christin_Khan_NOAA.jpg' WHERE id_animal = 4;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/3/35/Balaenoptera_brydei.jpg' WHERE id_animal = 5;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg/640px-Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg' WHERE id_animal = 6;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Balaenoptera_omurai%2C_Madagascar_-_Royal_Society_Open_Science_1.jpg/640px-Balaenoptera_omurai%2C_Madagascar_-_Royal_Society_Open_Science_1.jpg' WHERE id_animal = 7;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Finhval_%281%29.jpg/640px-Finhval_%281%29.jpg' WHERE id_animal = 8;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Pygmy_right_whale.png/640px-Pygmy_right_whale.png' WHERE id_animal = 9;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Ballena_gris_adulta_con_su_ballenato.jpg/640px-Ballena_gris_adulta_con_su_ballenato.jpg' WHERE id_animal = 10;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Southern_right_whale6.jpg/640px-Southern_right_whale6.jpg' WHERE id_animal = 11;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/GRNMS_-_Right_Whales_%2831361234602%29.jpg/640px-GRNMS_-_Right_Whales_%2831361234602%29.jpg' WHERE id_animal = 12;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Eubalaena_japonica_drawing.jpg/640px-Eubalaena_japonica_drawing.jpg' WHERE id_animal = 13;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Humpback_Whale_underwater_shot.jpg/640px-Humpback_Whale_underwater_shot.jpg' WHERE id_animal = 14;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Berardius_arnuxii_2.jpg/640px-Berardius_arnuxii_2.jpg' WHERE id_animal = 15;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Berardius_bairdii_3.jpg/640px-Berardius_bairdii_3.jpg' WHERE id_animal = 16;
UPDATE animais SET url_imagem = NULL WHERE id_animal = 17;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Tonina1_%282731842634%29.jpg/640px-Tonina1_%282731842634%29.jpg' WHERE id_animal = 18;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Black_dolphins_around_isla_gordon.jpg/640px-Black_dolphins_around_isla_gordon.jpg' WHERE id_animal = 19;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dolphins_at_L%C3%BCderitz%2C_Namibia_%283144863196%29.jpg/640px-Dolphins_at_L%C3%BCderitz%2C_Namibia_%283144863196%29.jpg' WHERE id_animal = 20;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Hector%27s_Dolphins_at_Porpoise_Bay_1999_a_cropped.jpg/640px-Hector%27s_Dolphins_at_Porpoise_Bay_1999_a_cropped.jpg' WHERE id_animal = 21;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Oceanogr%C3%A0fic_29102004.jpg/640px-Oceanogr%C3%A0fic_29102004.jpg' WHERE id_animal = 22;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_dolphin_noaa.jpg/640px-Common_dolphin_noaa.jpg' WHERE id_animal = 23;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Common_dolphin_noaa.jpg/640px-Common_dolphin_noaa.jpg' WHERE id_animal = 24;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Pygmy_killer_whales_%28Feresa_attenuata%29_off_of_Guam_%28anim252384854%29.jpg/640px-Pygmy_killer_whales_%28Feresa_attenuata%29_off_of_Guam_%28anim252384854%29.jpg' WHERE id_animal = 25;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Globicephala_macrorhynchus_Kurzflossen-Grindwal_DSCF8148.JPG/640px-Globicephala_macrorhynchus_Kurzflossen-Grindwal_DSCF8148.JPG' WHERE id_animal = 26;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pilot_Whale_-_Flickr_-_gailhampshire.jpg/640px-Pilot_Whale_-_Flickr_-_gailhampshire.jpg' WHERE id_animal = 27;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Grampo.jpg/640px-Grampo.jpg' WHERE id_animal = 28;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Hyperoodon_ampullatus_jumping.jpg/640px-Hyperoodon_ampullatus_jumping.jpg' WHERE id_animal = 29;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hyperoodon_planifrons.jpg/640px-Hyperoodon_planifrons.jpg' WHERE id_animal = 30;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Indopacetus_pacificus_2.jpg/640px-Indopacetus_pacificus_2.jpg' WHERE id_animal = 31;
UPDATE animais SET url_imagem = NULL WHERE id_animal = 32;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Inia_geoffrensis_boliviensis_9274062.jpg/640px-Inia_geoffrensis_boliviensis_9274062.jpg' WHERE id_animal = 33;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Amazonas-Flussdelfin_Orinoko3.jpg/640px-Amazonas-Flussdelfin_Orinoko3.jpg' WHERE id_animal = 34;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Pygmy_sperm_whale.jpg/640px-Pygmy_sperm_whale.jpg' WHERE id_animal = 35;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/5/58/Dwarf_sperm_whale_%28NOAA_Pitman%29.jpg' WHERE id_animal = 36;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Frazer%C2%B4s_dolphin_group.jpg/640px-Frazer%C2%B4s_dolphin_group.jpg' WHERE id_animal = 37;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Atlantic_white-sided_dolphin.jpg/640px-Atlantic_white-sided_dolphin.jpg' WHERE id_animal = 38;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/White-beaked_dolphins_%28Lagenorhynchus_albirostris%29_bow-riding_Eyjafjordur.jpg/640px-White-beaked_dolphins_%28Lagenorhynchus_albirostris%29_bow-riding_Eyjafjordur.jpg' WHERE id_animal = 39;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Peale%27s_dolphin_%28Sagmatias_australis%29_off_the_coast_of_Calbuco%2C_Chile_%28380921709%29.jpg/640px-Peale%27s_dolphin_%28Sagmatias_australis%29_off_the_coast_of_Calbuco%2C_Chile_%28380921709%29.jpg' WHERE id_animal = 40;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Hourglas_dolphin.jpg/640px-Hourglas_dolphin.jpg' WHERE id_animal = 41;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Pacific_white-sided_dolphins_%28Lagenorhynchus_obliquidens%29_NOAA.jpg/640px-Pacific_white-sided_dolphins_%28Lagenorhynchus_obliquidens%29_NOAA.jpg' WHERE id_animal = 42;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/DuskyDolphin.jpg/640px-DuskyDolphin.jpg' WHERE id_animal = 43;
UPDATE animais SET url_imagem = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/1918_Miller_A_new_river-dolphin_from_China_Fig._2a.jpg/640px-1918_Miller_A_new_river-dolphin_from_China_Fig._2a.jpg' WHERE id_animal = 44;
