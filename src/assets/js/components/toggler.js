var $toggle_1 = document.getElementsByClassName('portfolio__toggle_1')
var $block_1 = document.getElementsByClassName('portfolio__block_1')
var $toggle_2 = document.getElementsByClassName('portfolio__toggle_2')
var $block_2 = document.getElementsByClassName('portfolio__block_2')
var $toggle_3 = document.getElementsByClassName('portfolio__toggle_3')
var $block_3 = document.getElementsByClassName('portfolio__block_3')
var $toggle_4 = document.getElementsByClassName('portfolio__toggle_4')
var $block_4 = document.getElementsByClassName('portfolio__block_4')
var $toggle_5 = document.getElementsByClassName('portfolio__toggle_5')
var $block_5 = document.getElementsByClassName('portfolio__block_5')

$(document).ready(function(){
    $($toggle_1)
        .click(function(){
        $($block_1).slideToggle(300, function(){
            if ($(this).is(':hidden')) {
                $($toggle_1);
            } else {
                $($toggle_1);
            }
        });
        return false;
    });

    $($toggle_2)
        .click(function(){
            $($block_2).slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $($toggle_2);
                } else {
                    $($toggle_2);
                }
            });
            return false;
        });

    $($toggle_3)
        .click(function(){
            $($block_3).slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $($toggle_3);
                } else {
                    $($toggle_3);
                }
            });
            return false;
        });

    $($toggle_4)
        .click(function(){
            $($block_4).slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $($toggle_4);
                } else {
                    $($toggle_4);
                }
            });
            return false;
        });

    $($toggle_5)
        .click(function(){
            $($block_5).slideToggle(300, function(){
                if ($(this).is(':hidden')) {
                    $($toggle_5);
                } else {
                    $($toggle_5);
                }
            });
            return false;
        });
});

