import React, { Component } from 'react'
 
import TagsCanvas from 'react-tags-canvas'
 
class Tags extends Component {
  render() {
    return (
      <TagsCanvas
        textColour='goldenrod'
        outlineThickness= {0.5}
        minSpeed={0.03}
        freezeActive = {true}
        initial={[0.14, 0.08]}
        shuffleTags
        shape='sphere'
        zoom={0.9}
        noSelect
        textFont={null}
        pinchZoom={true}
        noSelect={true}
        textFont={null}
        depth= {0.8}
        fadeIn={3000}
        shape={'sphere'}
        tags={[
          { value: 'Javascript', weight: 5 },
          { value: 'React', weight: 10 },
          { value: 'HTML5', weight: 10 },
          { value: 'CSS3', weight: 10 },
          { value: 'PHP', weight: 10 },
          { value: 'Git', weight: 10 },
          { value: 'Redux', weight: 10 },
          { value: 'NodeJS', weight: 10 },
          { value: 'CSS3', weight: 10 },
          { value: 'PHP', weight: 10 },
          { value: 'Git', weight: 10 },
          { value: 'Redux', weight: 10 },
        ]}
      />
    )
  }
}

export default Tags;
