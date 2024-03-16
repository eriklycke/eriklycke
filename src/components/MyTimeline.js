import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool,  MdLaptopMac, MdWork } from 'react-icons/md'; // Import additional icons
import './MyTimeline.css';


const MyTimeline = () => (
  <div className="timeline-container">
    <VerticalTimeline>
      {/* Existing Work Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(128, 128, 128)' }}
        date="2023 - present"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdWork />}

      >
        <h3 className="vertical-timeline-element-title">Axis Communications</h3>
        <h4 className="vertical-timeline-element-subtitle">Lund, Sweden</h4>
        <p>Specialized in data enrichment and market analysis using open-source intelligence.
          Enhanced customer profiles and assessed market potential in various regions. Employed
          Business Intelligence tools, notably Qlik Sense, for efficient data visualization.</p>
      </VerticalTimelineElement>
      {/* New Tech Internship Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(128, 128, 128)' }}
        date="2023 - present"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">Lund, Sweden</h4>
        <p>Teachers’ assistant at the institution of informatics, the job includes helping and guiding
          first and second year students with their programming courses and assignments in Java,
          C#, and MSSQL.</p>
      </VerticalTimelineElement>

      {/* Additional Example Events */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(128, 128, 128)' }}
        date="2021 - 2024"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">Lund University School of Economics and Management</h3>
        <h4 className="vertical-timeline-element-subtitle">Lund, Sweden</h4>
        <p>Graduating in the spring of 2024 with a bachelors of science in information systems. </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--achievement"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid rgb(128, 128, 128)' }}
        date="2022-2023"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdWork />}
      >
        <h3 className="vertical-timeline-element-title">Höganäs AB</h3>
        <h4 className="vertical-timeline-element-subtitle">Höganäs, Sweden</h4>
        <p>Successfully completed two summers as a Shipping Coordinator at Höganäs AB. It Includes the coordinating and planning of international sea transports to subsidiaries. My
          expertise also includes managing the supply chain, logistics management, and business
          development. Additionally, I am skilled in developing reports in Excel and M3.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(128, 128, 128)' }}
        date="2015 - 2018"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">Iowa City High School</h3>
        <h4 className="vertical-timeline-element-subtitle">Iowa City, IA</h4>
        <p>Successfully completed a foreign exchange program with Education First in Iowa City, IA. Attened ICIS for a year and earned a certificatet of attendance</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--personal"
        contentStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(128, 128, 128)' }}
        date="2019"
        iconStyle={{ background: 'rgb(128, 128, 128)', color: '#fff' }}
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">Gymnasieexamen</h3>
        <h4 className="vertical-timeline-element-subtitle">Helsingborg, Sweden</h4>
        <p>Graduated from highschool with a major in economics.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </div>
);

export default MyTimeline;

