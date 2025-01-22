import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as e,a,b as t,e as Q}from"./app-DOPzaKUm.js";const T={},r=Q('<p>本文主要介绍目标检测中的基本概念以及公用的一些知识点。</p><h2 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h2><h3 id="目标检测中-模型一般有哪几种类型" tabindex="-1"><a class="header-anchor" href="#目标检测中-模型一般有哪几种类型"><span>目标检测中，模型一般有哪几种类型？</span></a></h3><ul><li><strong>one-stage</strong><ul><li>单阶段任务，以<strong>YOLO</strong>系列为主</li><li><strong>核心优势：速度非常快，适合做实时检测任务</strong></li></ul></li><li><strong>two-stage</strong><ul><li>两阶段任务，以<strong>RCNN</strong>系列为主</li><li><strong>核心优势：准确率高，适合做离线或实时性要求不高的任务</strong></li></ul></li></ul><h3 id="目标检测中的有哪些指标概念" tabindex="-1"><a class="header-anchor" href="#目标检测中的有哪些指标概念"><span>目标检测中的有哪些指标概念？</span></a></h3>',5),m=a("li",null,[a("p",null,"二分类指标"),a("ul",null,[a("li",null,[a("code",null,"TP/TN/FP/FN"),t("：这块完全与二分类任务相同。 需要注意的是："),a("strong",null,"目标检测是基于置信度阈值来计算，例如分别计算 0.9; 0.8; 0.7")])])],-1),o=a("p",null,[a("code",null,"mAP"),t("（平均精度）：在"),a("strong",null,"不同的置信度阈值"),t("中，绘画出"),a("code",null,"Precision(y)"),t(" 和 "),a("code",null,"Recall(x)"),t(" 的曲线图， 并计算出（y取最大值）的面积")],-1),s=a("code",null,"Recall",-1),i={class:"MathJax",jax:"SVG",style:{position:"relative"}},d={style:{"vertical-align":"-0.912ex"},xmlns:"http://www.w3.org/2000/svg",width:"16.281ex",height:"2.896ex",role:"img",focusable:"false",viewBox:"0 -877 7196.2 1279.9","aria-hidden":"true"},c=Q('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D445" d="M230 637Q203 637 198 638T193 649Q193 676 204 682Q206 683 378 683Q550 682 564 680Q620 672 658 652T712 606T733 563T739 529Q739 484 710 445T643 385T576 351T538 338L545 333Q612 295 612 223Q612 212 607 162T602 80V71Q602 53 603 43T614 25T640 16Q668 16 686 38T712 85Q717 99 720 102T735 105Q755 105 755 93Q755 75 731 36Q693 -21 641 -21H632Q571 -21 531 4T487 82Q487 109 502 166T517 239Q517 290 474 313Q459 320 449 321T378 323H309L277 193Q244 61 244 59Q244 55 245 54T252 50T269 48T302 46H333Q339 38 339 37T336 19Q332 6 326 0H311Q275 2 180 2Q146 2 117 2T71 2T50 1Q33 1 33 10Q33 12 36 24Q41 43 46 45Q50 46 61 46H67Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628Q287 635 230 637ZM630 554Q630 586 609 608T523 636Q521 636 500 636T462 637H440Q393 637 386 627Q385 624 352 494T319 361Q319 360 388 360Q466 361 492 367Q556 377 592 426Q608 449 619 486T630 554Z"></path></g><g data-mml-node="mi" transform="translate(759,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(1225,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(1658,0)"><path data-c="1D44E" d="M33 157Q33 258 109 349T280 441Q331 441 370 392Q386 422 416 422Q429 422 439 414T449 394Q449 381 412 234T374 68Q374 43 381 35T402 26Q411 27 422 35Q443 55 463 131Q469 151 473 152Q475 153 483 153H487Q506 153 506 144Q506 138 501 117T481 63T449 13Q436 0 417 -8Q409 -10 393 -10Q359 -10 336 5T306 36L300 51Q299 52 296 50Q294 48 292 46Q233 -10 172 -10Q117 -10 75 30T33 157ZM351 328Q351 334 346 350T323 385T277 405Q242 405 210 374T160 293Q131 214 119 129Q119 126 119 118T118 106Q118 61 136 44T179 26Q217 26 254 59T298 110Q300 114 325 217T351 328Z"></path></g><g data-mml-node="mi" transform="translate(2187,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mi" transform="translate(2485,0)"><path data-c="1D459" d="M117 59Q117 26 142 26Q179 26 205 131Q211 151 215 152Q217 153 225 153H229Q238 153 241 153T246 151T248 144Q247 138 245 128T234 90T214 43T183 6T137 -11Q101 -11 70 11T38 85Q38 97 39 102L104 360Q167 615 167 623Q167 626 166 628T162 632T157 634T149 635T141 636T132 637T122 637Q112 637 109 637T101 638T95 641T94 647Q94 649 96 661Q101 680 107 682T179 688Q194 689 213 690T243 693T254 694Q266 694 266 686Q266 675 193 386T118 83Q118 81 118 75T117 65V59Z"></path></g><g data-mml-node="mo" transform="translate(3060.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mfrac" transform="translate(4116.6,0)"><g data-mml-node="mrow" transform="translate(1025.4,394) scale(0.707)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(704,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g></g><g data-mml-node="mrow" transform="translate(220,-345) scale(0.707)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(704,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mo" transform="translate(1455,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g><g data-mml-node="mi" transform="translate(2233,0)"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"></path></g><g data-mml-node="mi" transform="translate(2982,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g></g><rect width="2839.6" height="60" x="120" y="220"></rect></g></g></g>',1),g=[c],h=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"R"),a("mi",null,"e"),a("mi",null,"c"),a("mi",null,"a"),a("mi",null,"l"),a("mi",null,"l"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"T"),a("mi",null,"P")]),a("mrow",null,[a("mi",null,"T"),a("mi",null,"P"),a("mo",null,"+"),a("mi",null,"F"),a("mi",null,"P")])])])],-1),f=a("code",null,"Precision",-1),p={class:"MathJax",jax:"SVG",style:{position:"relative"}},H={style:{"vertical-align":"-0.912ex"},xmlns:"http://www.w3.org/2000/svg",width:"20.034ex",height:"2.896ex",role:"img",focusable:"false",viewBox:"0 -877 8855.1 1279.9","aria-hidden":"true"},x=Q('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mi" transform="translate(751,0)"><path data-c="1D45F" d="M21 287Q22 290 23 295T28 317T38 348T53 381T73 411T99 433T132 442Q161 442 183 430T214 408T225 388Q227 382 228 382T236 389Q284 441 347 441H350Q398 441 422 400Q430 381 430 363Q430 333 417 315T391 292T366 288Q346 288 334 299T322 328Q322 376 378 392Q356 405 342 405Q286 405 239 331Q229 315 224 298T190 165Q156 25 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 114 189T154 366Q154 405 128 405Q107 405 92 377T68 316T57 280Q55 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(1202,0)"><path data-c="1D452" d="M39 168Q39 225 58 272T107 350T174 402T244 433T307 442H310Q355 442 388 420T421 355Q421 265 310 237Q261 224 176 223Q139 223 138 221Q138 219 132 186T125 128Q125 81 146 54T209 26T302 45T394 111Q403 121 406 121Q410 121 419 112T429 98T420 82T390 55T344 24T281 -1T205 -11Q126 -11 83 42T39 168ZM373 353Q367 405 305 405Q272 405 244 391T199 357T170 316T154 280T149 261Q149 260 169 260Q282 260 327 284T373 353Z"></path></g><g data-mml-node="mi" transform="translate(1668,0)"><path data-c="1D450" d="M34 159Q34 268 120 355T306 442Q362 442 394 418T427 355Q427 326 408 306T360 285Q341 285 330 295T319 325T330 359T352 380T366 386H367Q367 388 361 392T340 400T306 404Q276 404 249 390Q228 381 206 359Q162 315 142 235T121 119Q121 73 147 50Q169 26 205 26H209Q321 26 394 111Q403 121 406 121Q410 121 419 112T429 98T420 83T391 55T346 25T282 0T202 -11Q127 -11 81 37T34 159Z"></path></g><g data-mml-node="mi" transform="translate(2101,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(2446,0)"><path data-c="1D460" d="M131 289Q131 321 147 354T203 415T300 442Q362 442 390 415T419 355Q419 323 402 308T364 292Q351 292 340 300T328 326Q328 342 337 354T354 372T367 378Q368 378 368 379Q368 382 361 388T336 399T297 405Q249 405 227 379T204 326Q204 301 223 291T278 274T330 259Q396 230 396 163Q396 135 385 107T352 51T289 7T195 -10Q118 -10 86 19T53 87Q53 126 74 143T118 160Q133 160 146 151T160 120Q160 94 142 76T111 58Q109 57 108 57T107 55Q108 52 115 47T146 34T201 27Q237 27 263 38T301 66T318 97T323 122Q323 150 302 164T254 181T195 196T148 231Q131 256 131 289Z"></path></g><g data-mml-node="mi" transform="translate(2915,0)"><path data-c="1D456" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mi" transform="translate(3260,0)"><path data-c="1D45C" d="M201 -11Q126 -11 80 38T34 156Q34 221 64 279T146 380Q222 441 301 441Q333 441 341 440Q354 437 367 433T402 417T438 387T464 338T476 268Q476 161 390 75T201 -11ZM121 120Q121 70 147 48T206 26Q250 26 289 58T351 142Q360 163 374 216T388 308Q388 352 370 375Q346 405 306 405Q243 405 195 347Q158 303 140 230T121 120Z"></path></g><g data-mml-node="mi" transform="translate(3745,0)"><path data-c="1D45B" d="M21 287Q22 293 24 303T36 341T56 388T89 425T135 442Q171 442 195 424T225 390T231 369Q231 367 232 367L243 378Q304 442 382 442Q436 442 469 415T503 336T465 179T427 52Q427 26 444 26Q450 26 453 27Q482 32 505 65T540 145Q542 153 560 153Q580 153 580 145Q580 144 576 130Q568 101 554 73T508 17T439 -10Q392 -10 371 17T350 73Q350 92 386 193T423 345Q423 404 379 404H374Q288 404 229 303L222 291L189 157Q156 26 151 16Q138 -11 108 -11Q95 -11 87 -5T76 7T74 17Q74 30 112 180T152 343Q153 348 153 366Q153 405 129 405Q91 405 66 305Q60 285 60 284Q58 278 41 278H27Q21 284 21 287Z"></path></g><g data-mml-node="mo" transform="translate(4622.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mfrac" transform="translate(5678.6,0)"><g data-mml-node="mrow" transform="translate(1073.8,394) scale(0.707)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(704,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g></g><g data-mml-node="mrow" transform="translate(220,-345) scale(0.707)"><g data-mml-node="mi"><path data-c="1D447" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path></g><g data-mml-node="mi" transform="translate(704,0)"><path data-c="1D443" d="M287 628Q287 635 230 637Q206 637 199 638T192 648Q192 649 194 659Q200 679 203 681T397 683Q587 682 600 680Q664 669 707 631T751 530Q751 453 685 389Q616 321 507 303Q500 302 402 301H307L277 182Q247 66 247 59Q247 55 248 54T255 50T272 48T305 46H336Q342 37 342 35Q342 19 335 5Q330 0 319 0Q316 0 282 1T182 2Q120 2 87 2T51 1Q33 1 33 11Q33 13 36 25Q40 41 44 43T67 46Q94 46 127 49Q141 52 146 61Q149 65 218 339T287 628ZM645 554Q645 567 643 575T634 597T609 619T560 635Q553 636 480 637Q463 637 445 637T416 636T404 636Q391 635 386 627Q384 621 367 550T332 412T314 344Q314 342 395 342H407H430Q542 342 590 392Q617 419 631 471T645 554Z"></path></g><g data-mml-node="mo" transform="translate(1455,0)"><path data-c="2B" d="M56 237T56 250T70 270H369V420L370 570Q380 583 389 583Q402 583 409 568V270H707Q722 262 722 250T707 230H409V-68Q401 -82 391 -82H389H387Q375 -82 369 -68V230H70Q56 237 56 250Z"></path></g><g data-mml-node="mi" transform="translate(2233,0)"><path data-c="1D439" d="M48 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q146 66 215 342T285 622Q285 629 281 629Q273 632 228 634H197Q191 640 191 642T193 659Q197 676 203 680H742Q749 676 749 669Q749 664 736 557T722 447Q720 440 702 440H690Q683 445 683 453Q683 454 686 477T689 530Q689 560 682 579T663 610T626 626T575 633T503 634H480Q398 633 393 631Q388 629 386 623Q385 622 352 492L320 363H375Q378 363 398 363T426 364T448 367T472 374T489 386Q502 398 511 419T524 457T529 475Q532 480 548 480H560Q567 475 567 470Q567 467 536 339T502 207Q500 200 482 200H470Q463 206 463 212Q463 215 468 234T473 274Q473 303 453 310T364 317H309L277 190Q245 66 245 60Q245 46 334 46H359Q365 40 365 39T363 19Q359 6 353 0H336Q295 2 185 2Q120 2 86 2T48 1Z"></path></g><g data-mml-node="mi" transform="translate(2982,0)"><path data-c="1D441" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path></g></g><rect width="2936.5" height="60" x="120" y="220"></rect></g></g></g>',1),u=[x],v=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"P"),a("mi",null,"r"),a("mi",null,"e"),a("mi",null,"c"),a("mi",null,"i"),a("mi",null,"s"),a("mi",null,"i"),a("mi",null,"o"),a("mi",null,"n"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",null,"T"),a("mi",null,"P")]),a("mrow",null,[a("mi",null,"T"),a("mi",null,"P"),a("mo",null,"+"),a("mi",null,"F"),a("mi",null,"N")])])])],-1),M=a("code",null,"IOU",-1),_={class:"MathJax",jax:"SVG",style:{position:"relative"}},Z={style:{"vertical-align":"-1.158ex"},xmlns:"http://www.w3.org/2000/svg",width:"27.812ex",height:"3.447ex",role:"img",focusable:"false",viewBox:"0 -1011.8 12292.8 1523.5","aria-hidden":"true"},w=Q('<g stroke="currentColor" fill="currentColor" stroke-width="0" transform="scale(1,-1)"><g data-mml-node="math"><g data-mml-node="mi"><path data-c="1D43C" d="M43 1Q26 1 26 10Q26 12 29 24Q34 43 39 45Q42 46 54 46H60Q120 46 136 53Q137 53 138 54Q143 56 149 77T198 273Q210 318 216 344Q286 624 286 626Q284 630 284 631Q274 637 213 637H193Q184 643 189 662Q193 677 195 680T209 683H213Q285 681 359 681Q481 681 487 683H497Q504 676 504 672T501 655T494 639Q491 637 471 637Q440 637 407 634Q393 631 388 623Q381 609 337 432Q326 385 315 341Q245 65 245 59Q245 52 255 50T307 46H339Q345 38 345 37T342 19Q338 6 332 0H316Q279 2 179 2Q143 2 113 2T65 2T43 1Z"></path></g><g data-mml-node="mi" transform="translate(504,0)"><path data-c="1D442" d="M740 435Q740 320 676 213T511 42T304 -22Q207 -22 138 35T51 201Q50 209 50 244Q50 346 98 438T227 601Q351 704 476 704Q514 704 524 703Q621 689 680 617T740 435ZM637 476Q637 565 591 615T476 665Q396 665 322 605Q242 542 200 428T157 216Q157 126 200 73T314 19Q404 19 485 98T608 313Q637 408 637 476Z"></path></g><g data-mml-node="mi" transform="translate(1267,0)"><path data-c="1D448" d="M107 637Q73 637 71 641Q70 643 70 649Q70 673 81 682Q83 683 98 683Q139 681 234 681Q268 681 297 681T342 682T362 682Q378 682 378 672Q378 670 376 658Q371 641 366 638H364Q362 638 359 638T352 638T343 637T334 637Q295 636 284 634T266 623Q265 621 238 518T184 302T154 169Q152 155 152 140Q152 86 183 55T269 24Q336 24 403 69T501 205L552 406Q599 598 599 606Q599 633 535 637Q511 637 511 648Q511 650 513 660Q517 676 519 679T529 683Q532 683 561 682T645 680Q696 680 723 681T752 682Q767 682 767 672Q767 650 759 642Q756 637 737 637Q666 633 648 597Q646 592 598 404Q557 235 548 205Q515 105 433 42T263 -22Q171 -22 116 34T60 167V183Q60 201 115 421Q164 622 164 628Q164 635 107 637Z"></path></g><g data-mml-node="mo" transform="translate(2311.8,0)"><path data-c="3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path></g><g data-mml-node="mfrac" transform="translate(3367.6,0)"><g data-mml-node="mrow" transform="translate(220,481.4) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">预</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">测</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">框</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">与</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">真</text></g><g data-mml-node="mi" transform="translate(5000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">实</text></g><g data-mml-node="mi" transform="translate(6000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">框</text></g><g data-mml-node="mi" transform="translate(7000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(8000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">交</text></g><g data-mml-node="mi" transform="translate(9000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">集</text></g><g data-mml-node="mi" transform="translate(10000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">面</text></g><g data-mml-node="mi" transform="translate(11000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">积</text></g></g><g data-mml-node="mrow" transform="translate(220,-370.3) scale(0.707)"><g data-mml-node="mi"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">预</text></g><g data-mml-node="mi" transform="translate(1000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">测</text></g><g data-mml-node="mi" transform="translate(2000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">框</text></g><g data-mml-node="mi" transform="translate(3000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">与</text></g><g data-mml-node="mi" transform="translate(4000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">真</text></g><g data-mml-node="mi" transform="translate(5000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">实</text></g><g data-mml-node="mi" transform="translate(6000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">框</text></g><g data-mml-node="mi" transform="translate(7000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">的</text></g><g data-mml-node="mi" transform="translate(8000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">并</text></g><g data-mml-node="mi" transform="translate(9000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">集</text></g><g data-mml-node="mi" transform="translate(10000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">面</text></g><g data-mml-node="mi" transform="translate(11000,0)"><text data-variant="normal" transform="scale(1,-1)" font-size="884px" font-family="serif">积</text></g></g><rect width="8685.3" height="60" x="120" y="220"></rect></g></g></g>',1),y=[w],L=a("mjx-assistive-mml",{unselectable:"on",display:"inline"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("mi",null,"I"),a("mi",null,"O"),a("mi",null,"U"),a("mo",null,"="),a("mfrac",null,[a("mrow",null,[a("mi",{mathvariant:"normal"},"预"),a("mi",{mathvariant:"normal"},"测"),a("mi",{mathvariant:"normal"},"框"),a("mi",{mathvariant:"normal"},"与"),a("mi",{mathvariant:"normal"},"真"),a("mi",{mathvariant:"normal"},"实"),a("mi",{mathvariant:"normal"},"框"),a("mi",{mathvariant:"normal"},"的"),a("mi",{mathvariant:"normal"},"交"),a("mi",{mathvariant:"normal"},"集"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"积")]),a("mrow",null,[a("mi",{mathvariant:"normal"},"预"),a("mi",{mathvariant:"normal"},"测"),a("mi",{mathvariant:"normal"},"框"),a("mi",{mathvariant:"normal"},"与"),a("mi",{mathvariant:"normal"},"真"),a("mi",{mathvariant:"normal"},"实"),a("mi",{mathvariant:"normal"},"框"),a("mi",{mathvariant:"normal"},"的"),a("mi",{mathvariant:"normal"},"并"),a("mi",{mathvariant:"normal"},"集"),a("mi",{mathvariant:"normal"},"面"),a("mi",{mathvariant:"normal"},"积")])])])],-1),b=Q('<h3 id="什么是nms非极大值抑制" tabindex="-1"><a class="header-anchor" href="#什么是nms非极大值抑制"><span>什么是NMS非极大值抑制？</span></a></h3><p>非极大值抑制（Non-maximum supression）简称NMS，其作用是去除冗余的检测框，去冗余手段是剔除与极大值重叠较多的检测框结果。</p><h4 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h4><p>核心思想是搜索目标局部范围内的边界框置信度最大的这个最优值，去除目标邻域内的冗余边界框。</p><h4 id="具体步骤" tabindex="-1"><a class="header-anchor" href="#具体步骤"><span>具体步骤</span></a></h4><p>一般NMS后处理算法需要经历以下步骤（不含背景类，背景类无需NMS）：</p><ol><li>先将所有的边界框按照类别进行区分；</li><li>把每个类别中的边界框，按照置信度从高到低进行降序排列；</li><li>选择某类别所有边界框中置信度最高的边界框 <code>bbox1</code>， 然后从该类别的所有边界框列表中将该置信度最高的边界框 <code>bbox1</code> 移除并同时添加到输出列表中；</li><li>依次计算该 <code>bbox1</code> 和该类别边界框列表中剩余的 <code>bbox</code> 计算IOU；</li><li>将IOU与NMS预设阈值 <strong><code>Thre</code></strong> 进行比较，若某 <code>bbox</code> 与 <code>bbox1</code> 的IOU大于 <strong><code>Thre</code></strong> ， 即视为 <code>bbox1</code> 的“邻域”，则在该类别边界框列表中移除该<code>bbox</code>，即去除冗余边界框；</li><li>重复 <code>3~5</code> ，直至该类别的所有边界框列表为空，此时即为完成了一个物体类别的遍历；</li><li>重复 <code>2~6</code> ，依次完成所有物体类别的NMS后处理过程；</li><li>输出列表即为想要输出的检测框，NMS流程结束。</li></ol>',7);function D(N,z){return n(),e("div",null,[r,a("ul",null,[m,a("li",null,[o,a("ul",null,[a("li",null,[s,t("："),a("mjx-container",i,[(n(),e("svg",d,g)),h])]),a("li",null,[f,t("："),a("mjx-container",p,[(n(),e("svg",H,u)),v])])])]),a("li",null,[a("p",null,[M,t("："),a("mjx-container",_,[(n(),e("svg",Z,y)),L])])])]),b])}const P=l(T,[["render",D],["__file","detect-basis.html.vue"]]),C=JSON.parse('{"path":"/research/cv/detect-basis.html","title":"基础知识/领域常识","lang":"zh-CN","frontmatter":{"title":"基础知识/领域常识","date":"2023-12-01T00:00:00.000Z","article":false,"category":["深度学习"],"tag":["目标检测"],"description":"本文主要介绍目标检测中的基本概念以及公用的一些知识点。 基本概念 目标检测中，模型一般有哪几种类型？ one-stage 单阶段任务，以YOLO系列为主 核心优势：速度非常快，适合做实时检测任务 two-stage 两阶段任务，以RCNN系列为主 核心优势：准确率高，适合做离线或实时性要求不高的任务 目标检测中的有哪些指标概念？ 二分类指标 TP/TN...","head":[["meta",{"property":"og:url","content":"https://l1binn.github.io/research/cv/detect-basis.html"}],["meta",{"property":"og:site_name","content":"科研笔记"}],["meta",{"property":"og:title","content":"基础知识/领域常识"}],["meta",{"property":"og:description","content":"本文主要介绍目标检测中的基本概念以及公用的一些知识点。 基本概念 目标检测中，模型一般有哪几种类型？ one-stage 单阶段任务，以YOLO系列为主 核心优势：速度非常快，适合做实时检测任务 two-stage 两阶段任务，以RCNN系列为主 核心优势：准确率高，适合做离线或实时性要求不高的任务 目标检测中的有哪些指标概念？ 二分类指标 TP/TN..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-12T11:06:17.000Z"}],["meta",{"property":"article:author","content":"高礼彬"}],["meta",{"property":"article:tag","content":"目标检测"}],["meta",{"property":"article:published_time","content":"2023-12-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T11:06:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"基础知识/领域常识\\",\\"description\\":\\"本文主要介绍目标检测中的基本概念以及公用的一些知识点。 基本概念 目标检测中，模型一般有哪几种类型？ one-stage 单阶段任务，以YOLO系列为主 核心优势：速度非常快，适合做实时检测任务 two-stage 两阶段任务，以RCNN系列为主 核心优势：准确率高，适合做离线或实时性要求不高的任务 目标检测中的有哪些指标概念？ 二分类指标 TP/TN...\\"}"]]},"headers":[{"level":2,"title":"基本概念","slug":"基本概念","link":"#基本概念","children":[{"level":3,"title":"目标检测中，模型一般有哪几种类型？","slug":"目标检测中-模型一般有哪几种类型","link":"#目标检测中-模型一般有哪几种类型","children":[]},{"level":3,"title":"目标检测中的有哪些指标概念？","slug":"目标检测中的有哪些指标概念","link":"#目标检测中的有哪些指标概念","children":[]},{"level":3,"title":"什么是NMS非极大值抑制？","slug":"什么是nms非极大值抑制","link":"#什么是nms非极大值抑制","children":[]}]}],"git":{"createdTime":1708877558000,"updatedTime":1720782377000,"contributors":[{"name":"lb1098","email":"gao571470893@qq.com","commits":1},{"name":"嘉油","email":"gao571470893@qq.com","commits":1}]},"readingTime":{"minutes":2.27,"words":682},"filePathRelative":"research/cv/detect-basis.md","localizedDate":"2023年12月1日","excerpt":"<p>本文主要介绍目标检测中的基本概念以及公用的一些知识点。</p>\\n<h2>基本概念</h2>\\n<h3>目标检测中，模型一般有哪几种类型？</h3>\\n<ul>\\n<li><strong>one-stage</strong>\\n<ul>\\n<li>单阶段任务，以<strong>YOLO</strong>系列为主</li>\\n<li><strong>核心优势：速度非常快，适合做实时检测任务</strong></li>\\n</ul>\\n</li>\\n<li><strong>two-stage</strong>\\n<ul>\\n<li>两阶段任务，以<strong>RCNN</strong>系列为主</li>\\n<li><strong>核心优势：准确率高，适合做离线或实时性要求不高的任务</strong></li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{P as comp,C as data};
