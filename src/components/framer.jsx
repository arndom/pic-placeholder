import { Command } from 'cmdk'
import React from 'react'

export function FramerCMDK() {
  const [value, setValue] = React.useState('button')
  return (
    <div className="framer">
      <Command value={value} onValueChange={(v) => setValue(v)}>
        <div cmdk-framer-header="">
          <SearchIcon />
          <Command.Input autoFocus placeholder="Search the menu" />
        </div>

        <Command.List>
          <div cmdk-framer-items="">
            <div cmdk-framer-left="">
              <Command.Group heading="Documentation">
                <Item value="Demo" type="demo" subtitle="Slideshow">
                  <BadgeIcon />
                </Item>
                <Item value="Get Specific Image" type="info" subtitle="/api/{id}">
                  <RadioIcon />
                </Item>
                <Item value="Get Image List" type="info" subtitle="/api/list?limit=100">
                  <InputIcon />
                </Item>
                <Item value="Get Random Image" type="info" subtitle="/api/?random">
                  <InputIcon />
                </Item>
              </Command.Group>

              <hr cmdk-framer-separator-vertical="" />

              <Command.Group heading="Upcoming features">
                <Item value="Resize Image" subtitle="w by h, square, ratios">
                  <BadgeIcon />
                </Item>
                <Item value="Image Effects" subtitle="blur, grayscale, etc">
                  <BadgeIcon />
                </Item>
              </Command.Group>
              
            </div>
            
            <hr cmdk-framer-separator="" />

            <div cmdk-framer-right="">
              {/* {value === 'button' && <Button />}
              {value === 'input' && <Input />}
              {value === 'badge' && <Badge />}
              {value === 'radio' && <Radio />}
              {value === 'slider' && <Slider />}
              {value === 'container' && <Container />} */}
            </div>
          </div>
        </Command.List>
      </Command>
    </div>
  )
}

function Item({ children, value, subtitle, type }) {
  const bkgType = () => {
    if (type === "demo") return "#78BC61"
    if (type === "info") return "#E87461"
    return "#B4D0E5"
  };

  return (
    <Command.Item value={value} onSelect={() => {}}>
      <div cmdk-framer-icon-wrapper="" style={{ background: bkgType() }}>{children}</div>
      <div cmdk-framer-item-meta="">
        {value}
        <span cmdk-framer-item-subtitle="">{subtitle}</span>
      </div>
    </Command.Item>
  )
}

function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}

function InputIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6.5 1C6.22386 1 6 1.22386 6 1.5C6 1.77614 6.22386 2 6.5 2C7.12671 2 7.45718 2.20028 7.65563 2.47812C7.8781 2.78957 8 3.28837 8 4V11C8 11.7116 7.8781 12.2104 7.65563 12.5219C7.45718 12.7997 7.12671 13 6.5 13C6.22386 13 6 13.2239 6 13.5C6 13.7761 6.22386 14 6.5 14C7.37329 14 8.04282 13.7003 8.46937 13.1031C8.47976 13.0886 8.48997 13.0739 8.5 13.0591C8.51003 13.0739 8.52024 13.0886 8.53063 13.1031C8.95718 13.7003 9.62671 14 10.5 14C10.7761 14 11 13.7761 11 13.5C11 13.2239 10.7761 13 10.5 13C9.87329 13 9.54282 12.7997 9.34437 12.5219C9.1219 12.2104 9 11.7116 9 11V4C9 3.28837 9.1219 2.78957 9.34437 2.47812C9.54282 2.20028 9.87329 2 10.5 2C10.7761 2 11 1.77614 11 1.5C11 1.22386 10.7761 1 10.5 1C9.62671 1 8.95718 1.29972 8.53063 1.89688C8.52024 1.91143 8.51003 1.92611 8.5 1.9409C8.48997 1.92611 8.47976 1.91143 8.46937 1.89688C8.04282 1.29972 7.37329 1 6.5 1ZM14 5H11V4H14C14.5523 4 15 4.44772 15 5V10C15 10.5523 14.5523 11 14 11H11V10H14V5ZM6 4V5H1L1 10H6V11H1C0.447715 11 0 10.5523 0 10V5C0 4.44772 0.447715 4 1 4H6Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function RadioIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.49985 0.877045C3.84216 0.877045 0.877014 3.84219 0.877014 7.49988C0.877014 11.1575 3.84216 14.1227 7.49985 14.1227C11.1575 14.1227 14.1227 11.1575 14.1227 7.49988C14.1227 3.84219 11.1575 0.877045 7.49985 0.877045ZM1.82701 7.49988C1.82701 4.36686 4.36683 1.82704 7.49985 1.82704C10.6328 1.82704 13.1727 4.36686 13.1727 7.49988C13.1727 10.6329 10.6328 13.1727 7.49985 13.1727C4.36683 13.1727 1.82701 10.6329 1.82701 7.49988ZM7.49999 9.49999C8.60456 9.49999 9.49999 8.60456 9.49999 7.49999C9.49999 6.39542 8.60456 5.49999 7.49999 5.49999C6.39542 5.49999 5.49999 6.39542 5.49999 7.49999C5.49999 8.60456 6.39542 9.49999 7.49999 9.49999Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

function BadgeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5 6H11.5C12.3284 6 13 6.67157 13 7.5C13 8.32843 12.3284 9 11.5 9H3.5C2.67157 9 2 8.32843 2 7.5C2 6.67157 2.67157 6 3.5 6ZM1 7.5C1 6.11929 2.11929 5 3.5 5H11.5C12.8807 5 14 6.11929 14 7.5C14 8.88071 12.8807 10 11.5 10H3.5C2.11929 10 1 8.88071 1 7.5ZM4.5 7C4.22386 7 4 7.22386 4 7.5C4 7.77614 4.22386 8 4.5 8H10.5C10.7761 8 11 7.77614 11 7.5C11 7.22386 10.7761 7 10.5 7H4.5Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}
