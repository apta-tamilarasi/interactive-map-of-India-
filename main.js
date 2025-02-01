const stateDetails = [
    {
        state: "TAMIL NADU",
        img: "tamilnadu.jpg",
        leader: "M.K.STALIN",
        party: "DMK",
        link: "https://en.wikipedia.org/wiki/TamilNadu",
        coords: "280,940,278,926,281,908,281,887,276,876,268,867,267,851,257,845,254,836,276,829,294,820,299,796,293,807,319,800,337,790,361,779,381,786,362,834,353,879,320,918,295,946,290,952"
    },  
    {
        state: "KERALA",
        img: "vijayan.jpeg",
        leader: "VIJAYAN",
        party: "LEFT DEMOCRATIC FRONT(LDF)",
        link: "https://en.wikipedia.org/wiki/Kerala",
        coords: "208,799,229,818,253,835,253,852,263,855,265,871,275,897,276,921,268,936,255,921"
    },
    {
        state: "ANDRA PRADESH",
        img: "images.jpeg",
        leader: "N.CHANDRABABU NAIDU",
        party: "TELUGU DESAM PARTY",
        link: "https://en.wikipedia.org/wiki/AndraPradesh",
        coords: "512,594,442,656,429,677,411,679,391,698,371,717,369,754,346,780,325,783,309,762,290,757,275,723,288,696,407,639,444,616,480,595,483,602"
    },
    {
        state: "KARANATAKA",
        img: "karna.jpg",
        leader: "SRI SIDDARAMAIAH",
        party: "INDIAN NATIONAL CONGRESS",
        link: "https://en.wikipedia.org/wiki/Karnataka",
        coords: "293,621,285,614,275,625,269,639,259,645,247,652,236,646,221,665,205,671,196,684,191,700,188,728,197,749,205,787,219,802,237,821,261,833,278,827,290,818,307,793,319,782,276,764,266,729,277,697"
    },
    {
        state: "GOA",
        img: "goa.jpeg",
        leader: "PRAMOD SAWANT",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Goa",
        coords: "184,702,190,711,188,721,181,722,179,712,176,704"
    },
    {
        state: "LADAKH",
        img: "Ladakh.jpeg",
        leader: "JAMYANG TSERING NAMGYAL",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Ladakh",
        coords: "205,72,195,58,187,52,175,47,180,33,192,24,208,22,226,14,246,19,265,35,290,57,300,69,329,58,363,56,375,65,366,90,353,102,340,116,338,133,351,148,346,163,328,157,302,147,281,136,268,121,245,102,242,89,227,83"
    },
    {
        state: "JAMMU&KASHMIR",
        img: "Jammu.jpeg",
        leader: "OMAR ABDULLAH",
        party: "JAMMU&KASHMIR NATIONAL CONFERENCE",
        link: "https://en.wikipedia.org/wiki/Jammu&Kashmir",
        coords: "217,77,207,84,195,95,196,111,197,130,204,143,225,151,234,162,251,162,256,145,272,138,261,122,245,98,242,88"
    },
    {
        state: "HIMACHAL PRADESH",
        img: "Himachal.jpeg",
        leader: "SUKHVINDER SINGH SUKHU",
        party: "INDIAN NATIONAL CONGRESS",
        link: "https://en.wikipedia.org/wiki/Himachalpradesh",
        coords: "311,156,297,153,279,142,258,150,253,171,262,190,274,201,283,217,298,230,308,209,324,203,337,206,332,184,327,166"
    },
    {
        state: "PUNJAB",
        img: "Punjab.jpeg",
        leader: "BHAGWANT SINGH MANN",
        party: "AAM AADMI PARTY",
        link: "https://en.wikipedia.org/wiki/Punjab",
        coords: "203,228,220,206,226,181,246,171,252,180,261,201,276,215,275,234,256,246,237,249,209,242"
    },
    {
        state: "HARYANA",
        img: "Haryana.jpeg",
        leader: "NAYAB SINGH SAINI",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Haryana",
        coords: "276,292,281,279,283,264,288,247,294,233,286,224,274,242,264,249,248,252,231,258,226,252,221,251,244,281,256,294,268,301,283,307,291,305"
    },
    {
        state: "UTTARAKHAND",
        img: "Uttarkhand.jpeg",
        leader: "PUSHKAR SINGH DHAMI",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Uttarakhand",
        coords: "337,206,321,206,311,217,311,230,311,247,323,251,336,265,349,272,363,278,375,255,383,238,371,220,351,211"
    },
    {
        state: "RAJASTHAN",
        img: "Rajasthan.jpeg",
        leader: "BHAJAN LAL SHARMA",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Rajasthan",
        coords: "193,243,149,291,105,313,87,312,79,344,87,363,99,377,114,404,149,409,174,422,181,440,204,457,213,419,230,404,251,419,247,430,266,421,278,409,278,396,271,376,285,363,303,353,306,346,295,332,288,321,276,313,252,313,246,290,238,274,215,263,215,250"
    },
    {
        state: "UTTAR PRADESH",
        img: "UP.jpeg",
        leader: "YOGI ADITIYA NATH",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Uttarpradesh",
        coords: "307,236,298,240,289,250,288,269,291,283,299,300,299,314,296,319,304,334,321,342,346,356,341,375,333,387,347,397,364,396,381,396,407,396,429,406,449,410,458,437,465,401,488,377,478,350,477,326,450,327,414,314,393,294,357,285,325,264,311,260"
    },
    {
        state: "DELHI",
        img: "Delhi.webp",
        leader: "ATISHI MARLENA",
        party: "AAM AADMI PARTY",
        link: "https://en.wikipedia.org/wiki/Delhi",
        coords: "290,285,283,284,282,291,291,293"
    },
    {
        state: "GUJARAT",
        img: "gujarat.jpeg",
        leader: "BHUPENDRA PATEL",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Gujarat",
        coords: "100,422,76,418,43,419,30,428,35,440,58,458,94,451,86,468,67,479,46,483,59,497,71,516,98,530,120,517,137,486,157,486,159,510,156,521,155,543,167,548,178,534,179,517,183,503,192,489,201,465,174,441,148,420,122,409,114,411"
    },
    {
        state: "MADHYA PRADESH",
        img: "mp.jpeg",
        leader: "SHIVRAJ SINGH CHOUHAN",
        party: "BJP",
        link: "https://en.wikipedia.org/wiki/Madhyapradesh",
        coords: "360,296,340,307,321,323,314,328,309,336,311,338,325,355,325,376,337,378,348,379,359,374,361,368,364,363,377,356,386,356,389,360"
    },
    {
        state: "MAHARASHTRA",
        img: "Maharashtra.jpeg",
        leader: "EKNATH SHINDE",
        party: "SHIV SENA (SHINDE GROUP)",
        link: "https://en.wikipedia.org/wiki/Maharashtra",
        coords: "307,312,292,318,282,319,279,310,279,304,292,295,307,285,312,282,319,290,327,309"
    },
    {
        state: "WEST BENGAL",
        img: "westbengal.jpeg",
        leader: "MAMATA BANERJEE",
        party: "TRINAMOOL CONGRESS",
        link: "https://en.wikipedia.org/wiki/WestBengal",
        coords: "170,358,177,372,181,380,190,387,203,384,213,370,218,366,220,356"
    },

    {
        state: "MEGHALAYA",
        img: "mha.jpeg",
        link: "https://en.wikipedia.org/wiki/Meghalaya",
        coords: "657,380,665,365,687,365,715,358,724,369,738,381,725,384,700,385,672,382",
        leader: "CONRAD SANGMA",
        party: "NATIONAL PEOPLE's PARTY"
    },
    {
        state: "ASSAM",
        img: "assm.jpeg",
        link: "https://en.wikipedia.org/wiki/Assam",
        coords: "654,363,655,342,667,337,693,339,705,333,741,328,773,303,802,293,819,283,817,295,821,303,794,324,773,339,765,357,756,368,755,378,752,389,745,401,736,410,728,406,729,397,737,384,736,370,722,361,702,358,676,360",
        leader: "HIMANTA BISWA SHARMA",
        party: "BJP"
    },
    {
        state: "ODISHA",
        img: "Odisha.jpeg",
        link: "https://en.wikipedia.org/wiki/Odisha",
        coords: "539,498,560,484,581,500,570,541,566,561,532,562,520,584,503,599,479,592,416,633,433,577,447,540,489,482,516,489",
        leader: "MOHAN CHARAN MAJHI",
        party: "BJP"
    },
    {
        state: "CHHATTISGARH",
        img: "Chattis.jpeg",
        link: "https://en.wikipedia.org/wiki/Chhattisgarh",
        coords: "403,492,437,459,422,443,446,441,466,435,492,474,472,496,465,514,448,522,435,539,440,564,422,556,431,600,403,632,383,597,387,567,385,532",
        leader: "VISHNU DEO SAI",
        party: "BJP"
    },
    {
        state: "ARUNACAL PRADESH",
        img: "alp.jpeg",
        link: "https://en.wikipedia.org/wiki/ArunacalPradesh",
        coords: "810,315,808,325,820,313,829,303,844,300,854,307,851,291,859,275,843,269,829,260,823,247,818,239,804,252,785,249,768,254,757,270,746,277,734,290,721,301,705,304,712,309,715,320,734,323,759,319,768,305,785,299,805,288,817,284,823,300",
        leader: "PEMA KHANDU",
        party: "BJP"
    },
    {
        state: "NAGALAND",
        img: "nagaland.jpeg",
        link: "https://en.wikipedia.org/wiki/Nagaland",
        coords: "801,356,805,323,797,324,788,332,778,343,766,358,761,370,778,367,790,359",
        leader: "NEIPHIU RIO",
        party: "NATIONALIST DEMOCRATIC PROGRESSIVE PARTY"
    },
    {
        state: "MANIPUR",
        img: "mip.jpeg",
        link: "https://en.wikipedia.org/wiki/Manipur",
        coords: "788,367,794,384,786,407,774,417,757,414,752,401,757,382,771,372",
        leader: "N.BIREN SINGH",
        party: "BJP"
    },
    {
        state: "MIZORAM",
        img: "miz.jpeg",
        link: "https://en.wikipedia.org/wiki/Mizoram",
        coords: "740,410,757,419,759,437,757,481,745,482,738,458,727,422",
        leader: "LALDUHOMA",
        party: "ZORAM PEOPLE's MOVEMENT"
    },
    {
        state: "TRIPURA",
        img: "tpr.jpeg",
        link: "https://en.wikipedia.org/wiki/Tripura",
        coords: "703,426,722,408,727,424,712,448,701,448,696,434",
        leader: "MANIK SAHA",
        party: "BJP"
    }
];

const mapContainer = document.getElementById('about-state');

stateDetails.forEach(state => {
    const div = document.createElement('div');
    div.classList.add(state.state.toLowerCase().replace(" ", ""));
    div.style.position = 'absolute'; 
    div.style.display = 'none';
    div.style.padding = '10px'; 

   
    div.style.display = 'flex';
    div.style.flexDirection = 'column';
    div.style.alignItems = 'center'; // Center-align items in the div
    div.style.justifyContent = 'center'; // Center vertically
    div.style.backgroundColor = '#f0f0f0'; // WhatsApp-like background color
    div.style.borderRadius = '10px'; // Round corners for a bubble-like effect
    div.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)'; // Optional shadow for the bubble

    const h3 = document.createElement('h3');
    h3.textContent = state.state;
    h3.style.textAlign = 'center'; // Center text

    const img = document.createElement('img');
    img.src = state.img;
    img.alt = state.leader;
    img.width = 50; // Smaller size for the circle image
    img.height = 50;
    img.style.borderRadius = '50%'; // Make the image circular
    img.style.marginBottom = '10px'; // Space below the image

    const area = document.createElement('area');
    area.target = '_blank';
    area.alt = state.state;
    area.title = state.state;
    area.href = state.link;
    area.coords = state.coords;
    area.shape = 'poly';

    const h4 = document.createElement('h4');
    h4.textContent = state.leader;
    h4.style.textAlign = 'center';

    const p = document.createElement('p');
    p.textContent = state.party;
    p.style.textAlign = 'center'; 

    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(area); 

    mapContainer.appendChild(div);

    div.addEventListener('mouseenter', (event) => {
        div.style.display = "block";
      
        div.style.left = event.pageX + 10 + 'px'; 
        div.style.top = event.pageY + 10 + 'px'; 
    });

    div.addEventListener('mousemove', (event) => {
        div.style.left = event.pageX + 10 + 'px';
        div.style.top = event.pageY + 10 + 'px';
    });

    div.addEventListener('mouseleave', () => {
        div.style.display = 'none';
    });
    div.addEventListener('click', () => {
        const googleMapsURL = `https://www.google.com/maps/search/?q=${encodeURIComponent(state.state)}`;
        window.open(googleMapsURL, '_blank'); // Open in a new tab
    });
});

document.body.appendChild(mapContainer);
