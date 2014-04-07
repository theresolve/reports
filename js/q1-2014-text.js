// =================== GENERAL =================== //
// ========================================================= //

summary_en = "SUMMARY";
summary_fr = "SOMMAIRE";

download_en = "Download Report";
download_fr = "Télécharger le Rapport";

publication_of_en = "A publication of";
publication_of_fr = "Une publication de";

selected_language_en = "Language: English <span class='caret'></span>";
english_option_en = "&#x2713; English";
french_option_en = "Français";
selected_language_fr = "Langue: Français <span class='caret'></span>";
english_option_fr = "Anglais";
french_option_fr = "&#x2713; Français";

executive_summary_navbar_title_en = "Executive Summary";
obo_mboki_navbar_title_en = "Obo-Mboki attacks";
defection_navbar_title_en = "Defections in CAR";
congo_navbar_title_en = "Congo attack cluster";
resupplying_kony_navbar_title_en = "Resupplying Kony?";

$(function () {
  if (location.pathname.split('/')[1] == "en" || location.pathname.split('/')[1] == "en-print") {
    $("#summary").html(summary_en);
    $(".download").html(download_en);
    $("#publication_of").html(publication_of_en);
    $(".selected_language").html(selected_language_en);
    $(".english_option").html(english_option_en);
    $(".french_option").html(french_option_en);

    $("#executive_summary_navbar_title").html(executive_summary_navbar_title_en);
    $("#obo_mboki_navbar_title").html(obo_mboki_navbar_title_en);
    $("#defection_navbar_title").html(defection_navbar_title_en);
    $("#congo_navbar_title").html(congo_navbar_title_en);
    $("#resupplying_kony_navbar_title").html(resupplying_kony_navbar_title_en);
  } else {

  };
});
