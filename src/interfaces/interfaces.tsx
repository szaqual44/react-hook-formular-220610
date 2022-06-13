export interface DataType {
    id: number,
    name: string,
    login: string
}




export interface BaseProps {
    name:string
    label?:string 
}


//Extends props
export interface ExtendProps extends BaseProps{
    required?: boolean
}

//Picking props
export type PickedProps = Pick<ExtendProps,"name">

//omiting props
export type OmitedProps = Omit<ExtendProps,"name">




export interface TestProps {
    aa:string
    bb?:string 
}
