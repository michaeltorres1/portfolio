import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

const Timeline = () => (
  <VerticalTimeline>
    <VerticalTimelineElement
      className='vertical-timeline-element--work'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2020 - present'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>Freelance Work</h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        From Home
      </div>
      <p className='font-weight-lighter'>
        Create website for client to display images. User has administrative
        privileges to upload and manage their own data. Technologies used are
        MongoDB, ExpressJS, React, and NodeJS. AWS (Amazon Web Services) is used
        to save content that client uploads
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2019 - 2019'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>HTO SHOW</h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        San Francisco, CA
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <div className='justify-content-center'>
          <img
            className='mt-2'
            src='https://i.ibb.co/GkS89Lt/Screen-Shot-2020-04-26-at-3-54-20-PM.png'
            alt='...'
          />
        </div>
        <div>
          <p className='text-center font-weight-lighter'>
            An HBO-GO clone app that allows for user registration for having a
            history of account and allowing users to save favorites. This
            Full-Stack project was built on using the following technologies:
            Ruby on Rails, PostgreSQL, React / Redux, HTML5 and CSS3. Movies and
            images are stored using AWS
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2019 - 2019'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>KEYBOARD FRUIT NINJA</h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        San Francisco, CA
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <div className='justify-content-center'>
          <img
            className='mt-2'
            src='https://i.ibb.co/6HGL8zb/Screen-Shot-2020-04-26-at-3-57-00-PM.png'
            alt='...'
          />
        </div>
        <div>
          <p className='text-center font-weight-lighter'>
            An app inspired by Fruit Ninja. Instead of swiping - use the
            keyboard to slice the fruits. This app was built using JavaScript
            and Canvas to render the board
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2019 - 2019'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>
        Wikipedia Reliability Rater
      </h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        San Francisco, CA
      </div>
      <div className='d-flex flex-column justify-content-center'>
        <div className='justify-content-center'>
          <img
            className='mt-2'
            src='https://i.ibb.co/syrgmcY/Screen-Shot-2020-04-26-at-4-00-45-PM.png'
            alt='...'
          />
        </div>
        <div>
          <p className='text-center font-weight-lighter'>
            WiRR is an application built with the idea to calculate the
            reliability of an article. Any article found on wikipedia could be
            searched through the search bar and that article along with similar
            articles will come back as results along with the reliabilty of that
            article.
          </p>
        </div>
      </div>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2019 - 2019'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>App Academy</h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        San Francisco, CA
      </div>
      <p className='font-weight-lighter'>
        A 3 month intensive Full-Stack web development coding bootcamp with less
        than 3% acceptance rate. Focusing on Ruby on Rails, JavaScript, React,
        PostgreSQL and MongoDB
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2016 - 2018'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>LearnSQL</h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        Danbury, CT
      </div>
      <p className='font-weight-lighter'>
        LearnSQL is a web-based database application which provides a
        user-friendly environment for institutions to allow their students to
        experiment with relational data. This platform relies on ClassDB which
        is produced through the efforts of (DASSL, read dazzle) at Western
        Connecticut State University.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--education'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2016 - 2018'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>
        Western Connecticut State University
      </h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        Danbury, CT
      </div>
      <p className='font-weight-lighter'>
        4 year university where I received my Bachelors degree in Computer
        Science. Focusing on PostgreSQL, C++, and Java
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--enducation'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2014 - 2016'
      iconStyle={{ background: '#06304e', color: '#fff' }}
    >
      <h3 className='vertical-timeline-element-title'>
        Stony Brook University
      </h3>
      <div className='vertical-timeline-element-subtitle font-weight-light'>
        Stony Brook, NY
      </div>
      <p className='font-weight-lighter'>
        Beginning of my studies for pre-med course work. Quickly realized my
        passion is in Computer Science and started my career learning Python and
        Java
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className='vertical-timeline-element--enducation'
      contentStyle={{ background: '#1d1e2e', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #41f0ca' }}
      date='2600 BC'
      iconStyle={{ background: '#41f0ca', color: '#fff' }}
    >
      <h1 className='vertical-timeline-element-title'>🤔</h1>
    </VerticalTimelineElement>
  </VerticalTimeline>
);

export default Timeline;
