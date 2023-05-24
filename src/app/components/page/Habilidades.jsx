import React from 'react'

const Habilidades = () => {
  return (
    <div>
        
      
<div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
<img className=' w-15 h-15 mx-auto' src='/imagenes/cohete.png' alt='img'/>
  <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Mi Stack  </h2>
    
  </div>
  

  
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="data:image/png;base64,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" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          JavaScript
        </h3>
        
      </div>
    </div>

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          HTML 5
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://cdn1.iconfinder.com/data/icons/social-media-logos-7/64/css-3-512.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          CSS 3
        </h3>
        
      </div>
    </div>
   

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://user-images.githubusercontent.com/21227322/31187159-01c8d592-a8ff-11e7-9386-af708a7ae9de.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          React.js
        </h3>
       
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://avatars.githubusercontent.com/u/2918581?s=280&v=4" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Boostrap
        </h3>
       
      </div>
    </div>
    
    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://w7.pngwing.com/pngs/780/57/png-transparent-node-js-javascript-database-mongodb-native-miscellaneous-text-trademark.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Node
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://camo.githubusercontent.com/640cf0782f4cf5d27164f8befdba3183d5e304f8a1d5812e7d25f32dffd6f04b/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f737461727475702d6772696e642f696d6167652f75706c6f61642f635f66696c6c2c6470725f322e302c665f6175746f2c675f63656e7465722c685f313038302c715f3130302c775f313038302f76312f6763732f706c6174666f726d2d646174612d6473632f6576656e74732f6e6578746a732d626f696c6572706c6174652d6c6f676f2e706e67" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Next.js
        </h3>
       
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Express.js
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://cdn.worldvectorlogo.com/logos/java.svg" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Java
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Mysql
        </h3>
       
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Tailwind CSS
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Product Designer
        </p>
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://cdn.icon-icons.com/icons2/2429/PNG/512/figma_logo_icon_147289.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Figma
        </h3>
        
      </div>
    </div>
    
    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://miro.medium.com/v2/resize:fit:400/1*hX_l9M_WJkaupAwEwB7mZQ.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Git
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Git Hub
        </h3>
        
      </div>
    </div>
    

    <div className="text-center">
      <img className="rounded-full w-24 h-24 mx-auto" src="https://logodownload.org/wp-content/uploads/2019/10/adobe-photoshop-logo-0.png" alt="Image Description"/>
      <div className="mt-2 sm:mt-4">
        <h3 className="font-medium text-gray-800 dark:text-gray-200">
          Phothoshop
        </h3>
        
      </div>
    </div>
    
  </div>
  
 
  
</div>

    </div>
  )
}

export default Habilidades