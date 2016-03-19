import { default as React, Component } from "react";
import { default as ReactDOM } from "react-dom";

import foia from "../assets/foia.jpg";
import foia00 from "../assets/foia00.jpg";
import foia01 from "../assets/foia01.jpg";
import mccain from "../assets//mccain.jpg";
import talibanFive from "../assets/taliban_five.jpg";


const items = [
  { text: `This is what is known as "Bates numbering" or a "Bates stamp," named after inventor Edwin Bates. It's a number used to organize and identify documents.`,
    left: false,
    breakpoints: {
      sm: { y: 82, x: 120, w: 70, h: 25 }
    }},
  { text: `The State Department determined that nothing in this document needed to be redacted or withheld from public disclosure.`,
    left: false,
    breakpoints: {
      sm: { y: 105, x: 330, w: 80, h: 24 }
    }},
  { text: `The time line of briefings given to congressional oversight committees and specific lawmakers about Bergdahl's capture shows that the Obama administration told lawmakers it was considering trading the Taliban Five for the soldier as far back as 2011.`,
    img: talibanFive,
    left: false,
    breakpoints: {
      sm: { y: 140, x: 170, w: 242, h: 34 }
    }},
  { text: `A staffer from the Senate Select Committee on Intelligence (SSCI), which has oversight of the intelligence community, visited the Defense Intelligence Analysis Center (DIAC) for an update on the efforts of the Defense Intelligence Agency (DIA) to track down Bergdahl. The DIAC produces and manages foreign military intelligence.`,
    left: false,
    breakpoints: {
      sm: { y: 218, x: 160, w: 194, h: 22 }
    }},
  { text: `DIA/JS refers to the DIA "Joint Staff." The Joint Staff provides the Pentagon's Joint Chiefs of Staff with foreign military intelligence often used for war planning and to inﬂ uence defense policy. Here, we see the DIA/JS gave a briefi ng about Bergdahl and the Taliban Five negotiations to two Republican lawmakers, Sam Johnson, a war veteran and a member of the House Ways and Means Committee, and Andrew Barr, a member of the Financial Services Committee.`,
    left: false,
    breakpoints: {
      sm: { y: 245, x: 156, w: 267, h: 29 }
    }},
  { text: ` The Secretary of Defense submitted a report to Congress about efforts to locate and rescue Bergdahl, as required by the NDAA, or the National Defense Authorization Act, an annual defensespending bill signed into law by President Barack Obama.`,
    left: false,
    breakpoints: {
      sm: { y: 318, x: 153, w: 249, h: 37 }
    }},
  { text: `A lot of acronyms here, which indicates that negotiations between the US and Bergdahl's captors were heating up. Indeed, this entry shows that the administration received a proof of life video that revealed Bergdahl was in poor physical health and that lawmakers were put on notice that the US would negotiate with the Taliban in an effort to secure his return. This entry shows that lawmakers appreciated receiving the briefings. Ambassador James Dobbins, the SRAP (Special Representative for Afghanistan and Pakistan), would have been one of the key diplomats to engage in talks with foreign governments about efforts to resettle the Taliban Five. Ambassador Dobbins, SRAP, and DOD/IC (the Department of Defense/Intelligence Community) made calls to the SFRC (Senate Foreign Relations Committee); HFAC (House Foreign Affairs Committee); SACFO (Senate Appropriations Committee on Foreign Operations), you don't see this often; HACFO (House Appropriations Committee on Foreign Operations), you don't see this often either; SASC (Senate Armed Services Committee); HASC (House Armed Services Committee); SACD (Senate Appropriations Subcommittee on Defense); HACD (House Appropriations Subcommittee on Defense); SSCI (Senate Select Committee on Intelligence); and the HPSCI (House Permanent Select Committee on Intelligence). DSRAP refers to Deputy Special Representative for Pakistan and Afghanistan Jarrett Blanc, who personally spoke to staffers at some of these committees about the Bergdahl video.`,
    left: false,
    breakpoints: {
      sm: { y: 369, x: 150, w: 284, h: 80 }
    }},
  { text: `Ambassador Dobbins, SRAP, made additional calls to committee staffers to note that the US was not at that time engaged in discussions with the Taliban, but that such discussions, which would likely include the release of the Taliban Five, could lead to Bergdahl's release. This briefing, which took place three months prior to Bergdahl's rescue, is clear cut evidence that Congress was on notice that the administration would explore that option. Some staffers requested a classified briefing where they were provided details about the intelligence the US obtained related to Bergdahl's capture.`,
    left: false,
    breakpoints: {
      sm: { y: 453, x: 137, w: 297, h: 44 }
    }},
  { text: `The Review Authority is the individual in the State Department's FOIA office who reviewed these pages and determined that all of the information contained here could be released.`,
    left: false,
    breakpoints: {
      sm: { y: 487, x: 334, w: 127, h: 40 }
    }},
  { text: `Berghdal has been rescued. Ambassador Dobbins, SRAP, personally phoned a handful of senators to discuss this. One of the lawmakers, Senator Bob Corker, according to this entry, "understood the need to waive the 30-day notification." That's a key statement, and the point of contention between Congress and the White House after it was disclosed that the Taliban Five were traded for Bergdahl. By law, the Pentagon is required to notify Congress about any transfers of detainees out of Guantanamo. But in the case of Bergdahl and the Taliban Five, the Pentagon and the administration claimed Bergdahl's welfare trumped the administration's legal obligations and acted unilaterally.`,
    left: true,
    breakpoints: {
      sm: { y: 211, x: 563, w: 281, h: 83 }
    }},
  { text: `The SRAP and the National Intelligence Officer (NIO) provided an update to key committee members, including Senator John McCain, a former prisoner of war and a critic of the Bergdahl/Taliban deal, about the status of talks with the Taliban. This entry, two years before Bergdahl's rescue, contains the first disclosure that committee members were opposed to the deal to trade the Taliban Five for Bergdahl. But the entry also notes that, according to then-SRAP Ambassador Marc Grossman, the US had not spoken with the Taliban for six months and a deal to trade the Taliban Five wasn't in the immediate offering. An important note here: Grossman told lawmakers that the administration might consider a deal in the future. Lawmakers requested Grossman commit to consulting them before a decision was made. He agreed. But the Obama administration broke that agreement when it rescued Bergdahl.`,
    img: mccain,
    left: true,
    breakpoints: {
      sm: { y: 331, x: 560, w: 290, h: 110 }
    }}];

// fix broken syntax highlighting... '

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      annotationNum: null,
      handler: this.showAnnotationFixed,
      x: null,
      y: null,
      fixed: true,
      altLayout: false
    };
  }

  hideAnnotation() {
    this.setState({ annotationNum: null });
  }

  showAnnotation(annotationNum, event) {
    const x = event.clientX;
    const y = event.clientY;
    this.setState({ annotationNum, x, y });
  }

  showAnnotationFixed(annotationNum, event) {
    // swwap top/ left to bottom / right and move list into div.
    const x = 0;
    const y = 0;
    this.setState({ annotationNum, x, y });
  }

  hotSpot(item, idx) {
    const { breakpoints } = item;
    const handler = this.state.handler || () => {};
    const { x, y, w, h } = breakpoints.sm;
    const hotSpotStyle = { position: `absolute`,
      top: y,
      left: x,
      width: w,
      height: h,
      cursor: `pointer`,
      border: `2px solid transparent` };

      // <span>{idx + 1}</span>
    return (
      <li onMouseMove={ handler.bind(this, idx) }
        onMouseOut={ this.hideAnnotation.bind(this) }
        style={ hotSpotStyle }
        className="hot-spot"
        ref={ `hotSpot_${idx}` }
        id={ `hotSpot_${idx}` }>

      </li>
    );
  }
// /
  getAnnotationStyle(idx, left) {
    const el = this.refs[`annotation_${idx}`];
    const elHeight = (el) ? el.offsetHeight : 0;
    const elWidth = (el) ? el.offsetWidth : 0;
    const parentWidth = (el && el.parentElement) ? el.parentElement.offsetWidth : Infinity;
    const { annotationNum, altLayout, x, y } = this.state;
    const defaultStyle = { position: `absolute`, top: 0, left: 0, opacity: 0, height: 0, visibility: `hidden`};

    if(annotationNum === null || idx !== annotationNum) { return defaultStyle; }

    const pad = 60;

    return (left) ? {
      position: `absolute`,
      top: 0,
      left: 0,
      bottom: 3,
      opacity: 1
    } : {
      position: `absolute`,
      top: 0,
      right: 0,
      bottom: 3,
      opacity: 1
    };
  }


  getAltAnnotationStyle(idx) {
  	// const el = this.refs[`annotation_${idx}`];
   //  const elHeight = (el) ? el.offsetHeight : 0;
   //  const elWidth = (el) ? el.offsetWidth : 0;
   //  const parentWidth = (el && el.parentElement) ? el.parentElement.offsetWidth : Infinity;
    const { annotationNum, altLayout, x, y } = this.state;
    const defaultStyle = { position: `absolute`, top: 0, left: 0, opacity: 0, height: 0, visibility: `hidden`};

    if(annotationNum === null || idx !== annotationNum) { return defaultStyle; }

    const pad = 60;

    return {
      position: `absolute`,
      top: 0,
      left: 0,
      bottom: 3,
      opacity: 1
    };
  }

  annotation(item, idx) {
    const annotationStyle = (this.state.altLayout) ? this.getAltAnnotationStyle(idx) : this.getAnnotationStyle(idx, item.left);
    const img = (item.img) ? (<img src={item.img} className="annotation-image" />) : ``;
    return (
      <li className="annotation" style={ annotationStyle } ref={ `annotation_${idx}` } id={ `annotation_${idx}` }>
        <div className="annotation-num">{ idx + 1 }</div> <div className="annotation-text">{img} { item.text }</div>
      </li>
    );
  }
// /
  annotationList(items) {
    const annotationListStyle = { display: `block` };
    const annotationItems = items.map(this.annotation.bind(this));

    return (
      <ul style={ annotationListStyle }>
        { annotationItems }
      </ul>
    );

  }
// /

  render() {
    const foiaImageStyle = { height: `100%` };
    const annotationList = this.annotationList(items);
    const hotSpotItems = items.map(this.hotSpot.bind(this));
    const hotSpotListStyle = { display: `block` };
    const fixedList = (this.state.fixed) ? annotationList : ``;

    return (
      <div>
        <div style={{ position: `relative` }}>
        	<div className="imageHolder">
          	<img src={ foia00 } style={ foiaImageStyle } />
          </div>
          <div className="imageHolder">
          	<img src={ foia01 } style={ foiaImageStyle } />
          </div>
          <ul style={ hotSpotListStyle }>
            { hotSpotItems }
          </ul>
          { fixedList }
        </div>
      </div>
    );
  }
}
