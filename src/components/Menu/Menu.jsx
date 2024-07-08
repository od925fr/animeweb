import React from 'react'

function Menu() {
  return (

    <>

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
        
            <div class="container-fluid">

                <a class="navbar-brand" href="#">Navbar</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#">Listado de Elementos</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#">Filtrado de Datos</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Informacion de la API</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">Pag Anexas</a>
                        </li>
                    
                        <li class="nav-item">
                            <a class="nav-link" href="#">Dev Team</a>
                        </li>

                    </ul>
                
                </div>
            
            </div>
        
        </nav>

    </>

  )
}

export default Menu;