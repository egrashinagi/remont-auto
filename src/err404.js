
var green = 255;
var plus = 1;
var interval;

stage = acgraph.create('container');
var layer, path;

stage.suspend();

layer = stage.layer();
path = layer.path();
path.moveTo(70, 600);
path.arcTo(1800, 2000, -100, 20);

path.fill('#551100');
path.stroke('#aa5500');

path = layer.path();
path.moveTo(181, 368.5);
path.lineTo(245.25, 368.5);
path.lineTo(246.75, 348.25);
path.lineTo(273.75, 348.25);
path.lineTo(275, 333.25);
path.lineTo(240.75, 333.25);
path.lineTo(240.75, 317.5);
path.lineTo(201.5, 317.5);
path.curveTo(201.5, 317.5, 202.25, 335.25, 202.25, 335.25);
path.curveTo(202.25, 335.25, 177.75, 335.25, 177.75, 335.25);
path.curveTo(177.75, 335.25, 181, 368.5, 181, 368.5);
path.close();
path.fill('#bfbfbf');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(584.75, 369);
path.lineTo(514.75, 369);
path.lineTo(509.25, 344.75);
path.lineTo(485.75, 344.75);
path.lineTo(485.75, 333);
path.curveTo(485.75, 333, 522.25, 332.75, 522.25, 332.75);
path.curveTo(522.25, 332.75, 522.25, 317, 522.25, 317);
path.curveTo(522.25, 317, 565.25293, 317, 565.25, 317);
path.curveTo(565.24707, 317, 569, 334.25, 569, 334.25);
path.curveTo(569, 334.25, 587.386475, 334.25, 587.25, 334.25);
path.curveTo(587.113525, 334.25, 584.75, 369, 584.75, 369);
path.close();
path.fill('#bfbfbf');
path.stroke('2 #000000');

layer = stage.layer();
path = layer.path();
path.moveTo(261.25, 239.25);
path.lineTo(224, 239.25);
path.curveTo(224, 239.25, 212.597, 240.653, 204.5, 248.75);
path.curveTo(196.403, 256.846985, 196.5, 269, 196.5, 269);
path.curveTo(196.5, 269, 196.5, 325.251007, 196.5, 325.25);
path.curveTo(196.5, 325.248993, 244.253006, 325.25, 244.25, 325.25);
path.curveTo(244.246994, 325.25, 243.75, 289, 243.75, 289);
path.curveTo(243.75, 289, 263.026001, 289, 263, 289);
path.curveTo(262.973999, 289, 261.25, 239.25, 261.25, 239.25);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(503.25, 237.5);
path.lineTo(542.75, 237.5);
path.curveTo(542.75, 237.5, 554.5, 238, 563.25, 251.5);
path.curveTo(572, 265, 570.75, 273.5, 570.75, 273.5);
path.curveTo(570.75, 273.5, 570.75, 325.50061, 570.75, 325.5);
path.curveTo(570.75, 325.49939, 519.75, 325.5, 519.75, 325.5);
path.curveTo(519.75, 325.5, 519.5, 287.5, 519.5, 287.5);
path.curveTo(519.5, 287.5, 505, 287.5, 505, 287.5);
path.curveTo(505, 287.5, 503.25, 237.5, 503.25, 237.5);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(476, 329.25);
path.lineTo(597.25, 329.25);
path.lineTo(591.75, 375.5);
path.lineTo(574.75, 375.5);
path.lineTo(573.25, 360.5);
path.lineTo(568.5, 360.5);
path.lineTo(564.5, 375.75);
path.lineTo(537.25, 375.75);
path.curveTo(537.25, 375.75, 534.75, 361, 534.75, 361);
path.curveTo(534.75, 361, 529.75, 361, 529.75, 361);
path.curveTo(529.75, 361, 526.25, 375.75, 526.25, 375.75);
path.curveTo(526.25, 375.75, 507.993164, 375.75, 507.75, 375.75);
path.curveTo(507.506836, 375.75, 501.75, 339, 501.75, 339);
path.curveTo(501.75, 339, 495.25, 339, 495.25, 339);
path.curveTo(495.25, 339, 492.25, 347.25, 492.25, 347.25);
path.curveTo(492.25, 347.25, 475.998077, 347.25, 475.75, 347.25);
path.curveTo(475.501923, 347.25, 476, 329.25, 476, 329.25);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(164.25, 329.75);
path.lineTo(285, 329.75);
path.lineTo(282, 351.5);
path.lineTo(269, 351.5);
path.lineTo(267, 336);
path.lineTo(260, 336);
path.lineTo(255, 375.75);
path.lineTo(235.25, 375.75);
path.lineTo(231.75, 360.25);
path.lineTo(226.75, 360.25);
path.lineTo(224, 375.25);
path.lineTo(197, 375.25);
path.lineTo(193.75, 360);
path.lineTo(189, 360);
path.lineTo(187.75, 375);
path.curveTo(187.75, 375, 168.5, 376.5, 168.5, 376.25);
path.curveTo(168.5, 376, 164.25, 329.75, 164.25, 329.75);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(290, 544.75);
path.lineTo(309.75, 519);
path.lineTo(365, 519);
path.lineTo(372.5, 545.75);
path.lineTo(290, 544.75);
path.close();
path.fill('#3f3f3f');
path.stroke('#000000');

path = layer.path();
path.moveTo(383.75, 545.25);
path.lineTo(387.75, 519);
path.lineTo(445, 519);
path.lineTo(463.25, 545.75);
path.lineTo(383.75, 545.25);
path.close();
path.fill('#3f3f3f');
path.stroke('2 #000000');

layer = stage.layer();
path = layer.path();
path.moveTo(566.5, 321);
path.lineTo(566.5, 266.5);
path.lineTo(557.5, 249.5);
path.lineTo(543, 240.5);
path.lineTo(516, 240.5);
path.lineTo(516, 250.5);
path.lineTo(539.5, 250.5);
path.lineTo(549.5, 256.5);
path.lineTo(557, 269);
path.lineTo(557, 321);
path.lineTo(566.5, 321);
path.close();
path.fill('#cccccc');
path.stroke('0 #000000');

path = layer.path();
path.moveTo(200.5, 319.5);
path.lineTo(201, 262);
path.lineTo(205.5, 253);
path.lineTo(215.5, 247);
path.lineTo(221.5, 245);
path.lineTo(255.5, 245);
path.lineTo(255.5, 256);
path.lineTo(221.5, 255.5);
path.lineTo(213, 260.5);
path.lineTo(209, 269);
path.lineTo(209, 319.5);
path.lineTo(200.5, 319.5);
path.close();
path.fill('#cccccc');
path.stroke('0 #000000');

layer = stage.layer();
path = layer.path();
path.moveTo(311, 469.75);
path.curveTo(311, 469.75, 314.5, 523.25, 314.5, 523.25);
path.curveTo(314.5, 523.25, 317, 532.25, 338, 532.25);
path.curveTo(359, 532.25, 362, 525.25, 362, 525.25);
path.curveTo(362, 525.25, 365, 468.75, 365, 468.75);
path.curveTo(365, 468.75, 311, 469.75, 311, 469.75);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(390.5, 470.25);
path.curveTo(390.5, 470.25, 394, 523.75, 394, 523.75);
path.curveTo(394, 523.75, 396.5, 532.75, 417.5, 532.75);
path.curveTo(438.5, 532.75, 441.5, 525.75, 441.5, 525.75);
path.curveTo(441.5, 525.75, 444.5, 469.25, 444.5, 469.25);
path.curveTo(444.5, 469.25, 390.5, 470.25, 390.5, 470.25);
path.close();
path.fill('#7f7f7f');
path.stroke('#000000');

path = layer.path();
path.moveTo(285, 205);
path.lineTo(307.066132, 188.5);
path.lineTo(469.37591599999996, 187.5);
path.lineTo(488.49999999999994, 205.5);
path.lineTo(284.99999999999994, 205);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(239, 234.5);
path.curveTo(239.5, 234.5, 525, 233, 525, 233);
path.curveTo(525, 233, 510, 289.5, 510, 289.5);
path.curveTo(510, 289.5, 259.5, 291, 259.5, 291);
path.curveTo(259.5, 291, 239, 234.5, 239, 234.5);
path.close();
path.fill('#007f00');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(301.5, 132);
path.lineTo(331.113708, 108);
path.lineTo(443.645935, 108);
path.lineTo(474, 132.25);
path.lineTo(301.5, 132);
path.close();
path.fill('#7f7f7f');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(515.75, 286.5);
path.lineTo(537.75, 237.5);
path.lineTo(548.75, 239);
path.lineTo(519.25, 283);
path.lineTo(553.75, 242.75);
path.curveTo(553.75, 242.75, 561.5, 249.5, 561.5, 249.5);
path.curveTo(561.5, 249.5, 524.5, 279.5, 524.5, 279.5);
path.curveTo(524.5, 279.5, 565.75, 256.5, 565.75, 256.5);
path.curveTo(565.75, 256.5, 569.5, 265.75, 569.5, 265.75);
path.curveTo(569.5, 265.75, 522.5, 283.5, 522.5, 283.5);
path.curveTo(522.5, 283.5, 569.75, 270.5, 569.75, 270.5);
path.curveTo(569.75, 270.5, 570.25, 284.25, 570.25, 284.25);
path.curveTo(570.25, 284.25, 515.75, 286.5, 515.75, 286.5);
path.close();
path.fill('#191919');
path.stroke('0 #000000');

path = layer.path();
path.moveTo(246.5, 287.5);
path.lineTo(225.25, 239.25);
path.lineTo(213.25, 243);
path.lineTo(237.25, 277);
path.lineTo(206.75, 247);
path.lineTo(200.25, 255.25);
path.curveTo(200.25, 255.25, 238.5, 281.5, 238.25, 281.5);
path.curveTo(238, 281.5, 197.75, 261, 197.75, 261);
path.curveTo(197.75, 261, 196.75, 272, 196.75, 272);
path.curveTo(196.75, 272, 239.75, 285, 239.75, 285);
path.curveTo(239.75, 285, 196.75, 278.25, 196.75, 278.25);
path.curveTo(196.75, 278.25, 196.75, 287.75, 196.75, 287.75);
path.curveTo(196.75, 287.75, 246.5, 287.5, 246.5, 287.5);
path.close();
path.fill('#191919');
path.stroke('0 #000000');

layer = stage.layer();
path = layer.path();
path.moveTo(431.75, 526.876953);
path.curveTo(432.028809, 508.750213, 430.272736, 474.19695999999993, 430.586365, 472.99679599999996);
path.curveTo(430.899994, 471.79660099999995, 437.590912, 473.32788099999993, 441.25, 472.748474);
path.lineTo(439.577271, 524.645508);
path.curveTo(438.322724, 526.6320189999999, 436.928803, 527.128662, 434.977265, 527.376953);
path.curveTo(433.025757, 527.625244, 433.492432, 527.3735959999999, 431.750001, 526.876953);
path.close();
path.fill('#cccccc');
path.stroke('0 #000000');

path = layer.path();
path.moveTo(351.975647, 526.628357);
path.curveTo(352.254456, 508.50164800000005, 350.498383, 473.94839500000006, 350.812012, 472.74823000000004);
path.curveTo(351.125641, 471.548035, 357.816559, 473.079315, 361.475647, 472.49990800000006);
path.lineTo(359.802918, 524.396911);
path.curveTo(358.548371, 526.383422, 357.15445, 526.8800650000001, 355.20291199999997, 527.128356);
path.curveTo(353.251404, 527.376647, 353.718079, 527.124999, 351.975648, 526.628356);
path.close();
path.fill('#cccccc');
path.stroke('0 #000000');

layer = stage.layer();
rect = layer.rect(300, 132, 176, 60);
rect.fill('#7f7f7f');
rect.stroke('2 #000000');

rect = layer.rect(312.5, 149.5, 154, 42.5);
rect.fill('#3f3f3f');
rect.stroke('2 #000000');

rect = layer.rect(283, 205.5, 207.5, 46.5);
rect.fill('#7f7f7f');
rect.stroke('2 #000000');

rect = layer.rect(298.5, 252, 171.5, 14.5);
rect.fill('#ffffff');
rect.stroke('2 #000000');

rect = layer.rect(298.5, 266, 171.50001, 124);
rect.fill('#3f7f00');
rect.stroke('2 #000000');

rect = layer.rect(298, 390, 172.5, 36.5);
rect.fill('#bfbfbf');
rect.stroke('2 #000000');

rect = layer.rect(308, 426.5, 149, 43.5);
rect.fill('#3f3f3f');
rect.stroke('2 #000000');

rect = layer.rect(289, 545, 84.5, 31.5);
rect.fill('#7f7f7f');
rect.stroke('2 #000000');

rect = layer.rect(383, 545, 81.5, 32);
rect.fill('#7f7f7f');
rect.stroke('2 #000000');

path = layer.path();
path.moveTo(307.5, 266);
path.curveTo(307.5, 266, 383, 389.5, 383, 389.5);
path.curveTo(383, 389.5, 456.5, 266, 456.5, 266);
path.curveTo(456.5, 266, 307.5, 266, 307.5, 266);
path.close();
path.fill('#ffffaa');
path.stroke('2 #000000');

circle = layer.circle(382.5, 356, 14.70544);
circle.fill('#ff7f00');
circle.stroke('#f2415b');

rect = layer.rect(296.25, 219.5, 182.75, 23);
rect.fill('#3f3f3f');
rect.stroke('2 #000000');

layer = stage.layer();
leftEye = layer.circle(349, 172.5, 25.10976);
leftEye.fill('#ffff00');
leftEye.stroke('4 #000000');

rightEye = layer.circle(431.5, 172.5, 25);
rightEye.fill('#ffff00');
rightEye.stroke('4 #000000');

path = layer.path();
path.moveTo(358.999512, 118.234573);
path.curveTo(346.66601599999996, 119.896103, 338.166657, 97.16664899999999, 335.5, 85);
path.curveTo(332.833344, 72.833344, 331, 60.416672, 333.5, 53);
path.curveTo(336, 45.583328, 342.25, 43.166672, 344.75, 40.5);
path.curveTo(347.25, 37.833328, 342.166656, 30, 346.75, 29);
path.curveTo(351.333344, 28, 349.416656, 37.5, 352.25, 39.5);
path.curveTo(355.083344, 41.5, 363.416656, 41.083328, 367, 46.75);
path.curveTo(370.583344, 52.416672, 374.583496, 60.088482, 373.5, 78.75);
path.curveTo(372.416504, 97.411522, 371.333008, 116.57304400000001, 358.999512, 118.234573);
path.close();
path.fill('#ffff00');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(421.25, 118.25);
path.curveTo(411, 115.75, 405.75, 99.5, 406, 78);
path.curveTo(406.25, 56.5, 408, 47.5, 413.5, 43.25);
path.curveTo(419, 39, 421.5, 39.25, 425, 37.5);
path.curveTo(428.5, 35.75, 427.25, 26.5, 431.75, 27.5);
path.curveTo(436.25, 28.5, 433, 33.5, 434.5, 38);
path.curveTo(436, 42.5, 440, 40.25, 445, 47);
path.curveTo(450, 53.75, 451, 62.5, 447.25, 81);
path.curveTo(443.5, 99.5, 431.5, 120.75, 421.25, 118.25);
path.close();
path.fill('#ffff00');
path.stroke('2 #000000');

rect = layer.rect(381.25, 156.5, 18.25, 36.5);
rect.fill('#7f7f7f');
rect.stroke('2 #000000');

rect = layer.rect(370, 217, 17.5, 20.5);
rect.fill('#ffffff');
rect.stroke('2 #000000');

rect = layer.rect(398, 217, 17.25, 20.25);
rect.fill('#ffffff');
rect.stroke('2 #000000');

layer = stage.layer();
circle = layer.circle(338, 165.5, 10.25914);
circle.fill('#ffffff');
circle.stroke('0 #e5e5e5');

circle = layer.circle(421.00001, 165, 10.25914);
circle.fill('#ffffff');
circle.stroke('0 #e5e5e5');

path = layer.path();
path.moveTo(351, 106);
path.curveTo(351, 106, 337, 85.5, 337, 58);
path.curveTo(337, 30.5, 356, 72, 356, 72);
path.curveTo(356, 72, 351, 106, 351, 106);
path.close();
path.fill('#ffffff');
path.stroke('0 #000000');

path = layer.path();
path.moveTo(425, 110.207108);
path.curveTo(425, 110.207108, 411, 89.707108, 411, 62.207112);
path.curveTo(411, 34.707112, 430, 76.207108, 430, 76.207108);
path.curveTo(430, 76.207108, 425, 110.207108, 425, 110.207108);
path.close();
path.fill('#ffffff');
path.stroke('0 #000000');

layer = stage.layer();
path = layer.path();
path.moveTo(363.5, 145.125);
path.lineTo(368.5, 138.375);
path.curveTo(368.5, 138.375, 386.25, 147.125, 386.25, 147.125);
path.curveTo(386.25, 147.125, 386.25, 134.625, 386.25, 134.625);
path.curveTo(386.25, 134.625, 395.503387, 134.625, 395.5, 134.625);
path.curveTo(395.496613, 134.625, 395.5, 147.127548, 395.5, 147.125);
path.curveTo(395.5, 147.122452, 409.25, 136.875, 409.25, 136.875);
path.curveTo(409.25, 136.875, 416, 142.625, 416, 142.625);
path.curveTo(416, 142.625, 391.5, 162.875, 391.5, 162.875);
path.curveTo(391.5, 162.875, 363.5, 145.125, 363.5, 145.125);
path.close();
path.fill('#000000');
path.stroke('2 #000000');

pupilLeft = layer.circle(348.75, 172.25, 4.77624);
pupilLeft.fill('#000000');
pupilLeft.stroke('2 #000000');

circle = layer.circle(431.75, 171.5, 4.77624);
circle.fill('#000000');
circle.stroke('2 #000000');

path = layer.path();
path.moveTo(341.75, 54.5);
path.lineTo(358.75, 52);
path.lineTo(360.25, 57.5);
path.lineTo(354.5, 59.25);
path.lineTo(360.5, 109.25);
path.lineTo(356.25, 110);
path.lineTo(349, 60);
path.lineTo(342.5, 60.25);
path.lineTo(341.75, 54.5);
path.close();
path.fill('#ff0000');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(417.75, 57.25);
path.lineTo(418.25, 51.25);
path.lineTo(438.5, 53.75);
path.lineTo(437.5, 60.75);
path.lineTo(430.5, 60.25);
path.lineTo(424.25, 110);
path.lineTo(419.25, 109);
path.lineTo(424.25, 59.5);
path.lineTo(417.75, 57.25);
path.close();
path.fill('#ff0000');
path.stroke('2 #000000');

path = layer.path();
path.moveTo(374.5, 201.75);
path.lineTo(406.75, 201.75);
path.lineTo(406.75, 195.75);
path.lineTo(402.5, 190.25);
path.lineTo(379.75, 190.25);
path.lineTo(374, 196.25);
path.lineTo(374.5, 201.75);
path.close();
path.fill('#000000');
path.stroke('2 #000000');

stage.resume();

function changeEyeColor() {
    if (green) {
        green -= plus;
        var color = '#ff' + (green.toString(16).length == 1 ? ('0' + green.toString(16)) : green.toString(16)) + '00';
        leftEye.fill(color);
        rightEye.fill(color);
    } else {
        clearInterval(interval);
    }
}