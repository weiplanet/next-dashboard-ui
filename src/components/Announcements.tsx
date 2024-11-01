
import Image from "next/image";

// Dummy data
const events=[
    {
      id:1,
      title:"Event 1",
      time:"12:00 PM - 2:00 PM",
      description:"Description of event 1"
    },
    {
      id:2,
      title:"Event 2",
      time:"12:00 PM - 2:00 PM",
      description:"Description of event 2"
    },
    {
      id:3,
      title:"Event 3",
      time:"12:00 PM - 2:00 PM",
      description:"Description of event 3"
    }
  ]

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
        <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Announcements</h1>
            <span className="text-xs text-gray-400">View All</span>
        </div>
        <div className="flex flex-col gap-4">
            <div className="bg-lamaSkyLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet?</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-10-10</span>    
                </div>  
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempora harum quae soluta.</p>              
            </div>
            <div className="bg-lamaPurpleLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet?</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-10-10</span>    
                </div>                
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempora harum quae soluta.</p>   
            </div>
            <div className="bg-lamaYellowLight rounded-md p-4">
                <div className="flex items-center justify-between">
                    <h2 className="font-medium">Lorem ipsum dolor sit amet?</h2>
                    <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2024-10-10</span>    
                </div>                
                <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto tempora harum quae soluta.</p>   
            </div>
        </div>
      
    </div>
  )
}

export default Announcements