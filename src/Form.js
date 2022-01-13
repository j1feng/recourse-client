let MyForm = () => {

    let numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    let updateSlider = () => {
        let slide = document.getElementById('salaryRange');
        let sliderDiv = document.getElementById("salaryRangeValue");
        slide.onchange = function() {
            sliderDiv.innerHTML = numberWithCommas(this.value) + " $/year";
        }
    }
    return (
      <form className="form">
        <label>Please input your yearly salary: &nbsp;&nbsp;    
        <br /><br />
        <input type="range" min="0" max="200000" class="slider" 
            id="salaryRange" onChange = {updateSlider}></input>
        <p id='salaryRangeValue'></p>
        </label>
      </form>
    )
  }

export default MyForm;