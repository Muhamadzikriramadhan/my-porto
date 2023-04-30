import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import java from "../assets/skills/java.svg"
import kotlin from "../assets/skills/kotlin.svg"
import codeigniter from "../assets/skills/codeigniter.svg"
import php from "../assets/skills/php.svg"
import github from "../assets/skills/github.svg"

import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">This is a skill I got when I started learning to code about 4 years ago.</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Java" experience="2 years" img={java} />
                <SkillCard name="Kotlin" experience="1 years" img={kotlin} />
                <SkillCard name="Rest API" experience="1 years" img={codeigniter} />
                <SkillCard name="Php" experience="4 years" img={php} />
                <SkillCard name="Github" experience="3 years" img={github} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}