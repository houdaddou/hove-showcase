import * as React from "react"
import Layout from "../components/Layout"
import Drawer from '@mui/material/Drawer';


export default function Mentions() {
  const styles = theme => ({
    drawerPaper: {
      backgroundImage: `url(${'/drawer'})`

    },
})
  return (
    <div>
          <Drawer                    
      variant="permanent"
                    sx={ {
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: 533,
                            backgroundImage: 'url(/drawer.jpg)',
                            backgroundSize: 'cover',
                            borderRight: 'none',
                        }
                    } }
                    >
                    </Drawer>
                    <div>Mentions legales</div>
                    </div>
  )
}