import React from 'react'

class AddItem extends React.Component {

    descRef = React.createRef();
    amountRef = React.createRef();

    state = {
        type: 'inc',
    }

    getType = (e) => {

        const type = e.target.value;
        this.setState({ 
            type,
        })
       

    }

    createType = () => {


        if(this.state.type === 'inc') {
            const inc = {
                desc: this.descRef.current.value,
                amount: this.amountRef.current.value,
            }

        this.props.createInc(inc);
            
        } else {
    
            const exp = {
                desc: this.descRef.current.value,
                amount: this.amountRef.current.value,
            }
            this.props.createExp(exp);
        
        }

    }



    render() {
    return (
        <div className="add">
                <div className="add__container">
                    <select className="add__type" onChange={this.getType}>
                        <option value="inc" defaultValue="inc">+</option>
                        <option value="exp">-</option>
                    </select>
                    <input type="text" ref={this.descRef} className="add__description" placeholder="Add description"/>
                    <input type="number" ref={this.amountRef} className="add__value" placeholder="Value"/>
                    <button className="add__btn"><i className="ion-ios-checkmark-outline" onClick={this.createType}></i></button>
                </div>
            </div>
    )
    }
}

export default AddItem;