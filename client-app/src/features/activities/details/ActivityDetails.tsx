import React from 'react'
import { Card, Image, Button } from 'semantic-ui-react'
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';



export default function ActivityDetails(){
  const{activityStore} = useStore();
  const{selectedActivity: activity} = activityStore;
  if(!activity) return <LoadingComponent/>;
    return(
        <Card fluid>
        <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
           {activity.date}
          </Card.Meta>
          <Card.Description>
            {activity.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <Button.Group widths='2'>
             <Button onClick={() => activityStore.openForm(activity.id)} basic color='blue' content='Edit' />
             <Button onClick={activityStore.cancelSelectedActivity} basic color='grey' content='Cancel' />
             </Button.Group>
        </Card.Content>
      </Card>
    )
}