import React from "react";
import Logo from '../../logo.svg'

const Presentation = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <img src={Logo} alt="Appli" style={{ display: 'inline-block' }} />
      </div>
      <div style={{ display: 'inline-block', width: '50%' }}>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
        <p>
          Blalbal aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze aofnazoid ananze vvv
        </p>
      </div>
    </div>
  )
}

const ActionButtons = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
      <button>
        Réserver
      </button>

      <button>
        Rejoindre
      </button>
    </div>
  )
}

const RestoCard = () => {
  return (
    <div style={{ width: '180px', height: '260px', border: '1px solid black', borderRadius: '3px' }}>
      Pasta
    </div>
  )
}

const RestaurantCards = () => {
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
      <RestoCard />
    </div>
  )
}

const Content = () => {
  return (
    <div style={{ padding: '8px' }}>
      <Presentation />

      <ActionButtons />

      <RestaurantCards />
    </div>
  )
}

export default Content;