$(function () {
  $('#french').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/fr/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else {
      window.location = "/fr/";
    }
    return false;
  });
});

$(function () {
  $('#english').click(function() { 
    if (location.pathname.split('/')[2] && location.pathname.split('/')[3]) {
      window.location = "/en/" + location.pathname.split('/')[2] + "/" + location.pathname.split('/')[3];
    } else {
      window.location = "/";
    }
    return false;
  });
});

$(function () {
  if (location.pathname.split('/')[3] == "introduction") {
    $("#introduction").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-survival") {
    $("#lra-survival").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "lra-force-capacity") {
    $("#lra-force-capacity").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "congo") {
    $("#congo").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "car") {
    $("#car").addClass("active-nav-item")
  } else if (location.pathname.split('/')[3] == "background") {
    $("#background").addClass("active-nav-item")
  } else {
    return false;
  }
  return false;
});

var executive_summary_title_en = "Executive summary: The five most important LRA trends of 2013";
var executive_summary_tldr_en = "Lord's Resistance Army (LRA) attacks and abductions continued to decline in 2013, hitting their lowest levels since 2008, and military operations and defections significantly weakened the group's fighting capacity. The notable exceptions to these trends were a resurgence of large-scale LRA looting raids in areas of Central African Republic (CAR) under the authority of ex-Seleka rebels and the first LRA attacks in South Sudan since 2011.";
var executive_summary_title_fr = "Resume: Les cinq tendances de la LRA plus importants de 2013";
var executive_summary_tldr_fr = "";

var executive_summary_subtitle_1_en = "1. The LRA lost as much as one-fifth of its core fighting capacity";
var executive_summary_text_1_en = "<p>The LRA's greatest weakness is its inability to replace the male Ugandan combatants that comprise the core of its command structure and fighting capacity. In 2013, <a href='http://reports.lracrisistracker.com/en/annual-2013/lra-force-capacity/'>16 Ugandan combatants defected</a> from the LRA and another 16, including four senior officers, were confirmed killed or captured. Ugandan troops operating under the African Union Regional Task Force (AU RTF) may have also captured or killed as many as eight additional fighters.</p><p>In total, the LRA has lost 32&ndash;40 (16%&ndash;20%) of the estimated 200 Ugandan officers and fighters that were in its ranks at the beginning of 2013.</p>"
var executive_summary_subtitle_1_fr = "";
var executive_summary_text_1_fr = "";

var executive_summary_subtitle_2_en = "2. LRA commanders are also losing the captives they depend on most";
var executive_summary_text_2_en = "<p>Sixty-two women and children who had spent at least six months in LRA captivity <a href='http://reports.lracrisistracker.com/en/annual-2013/lra-force-capacity/#returnees'>returned home in 2013</a>, a significant portion of the experienced labor that senior LRA commanders rely on to sustain day-to-day life in the bush. A vast majority (73%) either escaped with defecting LRA combatants or were released by LRA fighters, including 28 women and children released in a single incident in March 2013.</p>"
var executive_summary_subtitle_2_fr = "";
var executive_summary_text_2_fr = "";

var executive_summary_subtitle_3_en = "3. The AU RTF severely disrupted the LRA's supply networks and safe havens";
var executive_summary_text_3_en = "<div class='col-md-4'><p>In recent years, LRA commanders <a href='http://reports.lracrisistracker.com/en/annual-2013/lra-survival/'>established a network of safe havens</a> across the region, including semi-permanent camps in the Democratic Republic of Congo (Congo) from which they illegally poached ivory. LRA commanders smuggled ivory and other supplies into LRA camps in the Sudanese-controlled Kafia Kingi enclave, where the group bartered </p></div><div class='col-md-4'><p>ivory and received limited supplies from Sudanese troops. In late 2013, LRA forces claiming to negotiate Kony's surrender even convinced transitional authorities in CAR to provide them with rope, food, and medical supplies.</p><p><a href='http://reports.lracrisistracker.com/en/annual-2013/lra-force-capacity/'>In response</a>, Ugandan RTF troops secretly destroyed the LRA's Kafia</p></div><div class='col-md-4'><p>Kingi camps in early 2013, and recovered supplies provided by CAR officials in a raid on an LRA group that had abandoned the 'negotiations' in November 2013. In September 2013, South Sudanese and Congolese RTF troops destroyed two LRA camps in Congo in the first offensive operations against the group there in over two years.</p></div>"
var executive_summary_subtitle_3_fr = "";
var executive_summary_text_3_fr = "";

var executive_summary_subtitle_4_en = "4. LRA attacks and abductions in Congo dropped significantly";
var executive_summary_text_4_en = "<p>LRA violence in Congo <a href='http://reports.lracrisistracker.com/en/annual-2013/congo/'>declined for the fourth consecutive year</a>, with attacks dropping 44% and abductions dropping 35% from 2012&ndash;2013. The number of Congolese civilians displaced by LRA violence has dropped less dramatically in recent years, indicating LRA violence remains severe enough to prevent many civilians from returning home.</p>"
var executive_summary_subtitle_4_fr = "";
var executive_summary_text_4_fr = "";

var executive_summary_subtitle_5_en = "5. The LRA exploited insecurity in CAR to conduct its most violent attacks";
var executive_summary_text_5_en = "<p>Unlike trends in Congo, <a href='http://reports.lracrisistracker.com/en/annual-2013/car/#mass'>LRA violence in CAR increased</a> to its highest point since 2010. This trend was driven by the abduction of over 200 people in a series of particularly violent attacks in areas under the authority of ex-Seleka rebels where AU RTF forces have limited access.</p>"
var executive_summary_subtitle_5_fr = "";
var executive_summary_text_5_fr = "";

$(function () {
  if (location.pathname.split('/')[1] == "en") {
    $("#executive_summary_title").html(executive_summary_title_en);
    $("#executive_summary_tldr").html(executive_summary_tldr_en);
    $("#executive_summary_subtitle_1").html(executive_summary_subtitle_1_en);
    $("#executive_summary_subtitle_2").html(executive_summary_subtitle_2_en);
    $("#executive_summary_subtitle_3").html(executive_summary_subtitle_3_en);
    $("#executive_summary_subtitle_4").html(executive_summary_subtitle_4_en);
    $("#executive_summary_subtitle_5").html(executive_summary_subtitle_5_en);

    $("#executive_summary_text_1").html(executive_summary_text_1_en);
    $("#executive_summary_text_2").html(executive_summary_text_2_en);
    $("#executive_summary_text_3").html(executive_summary_text_3_en);
    $("#executive_summary_text_4").html(executive_summary_text_4_en);
    $("#executive_summary_text_5").html(executive_summary_text_5_en);
  } else {
    $("#executive_summary_title").html(executive_summary_title_fr);
  };
});

