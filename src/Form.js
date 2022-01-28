let ActionForm = () => {

    function httpGetAsync(theUrl, callback) {
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.onreadystatechange = function () {
            if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
                callback(xmlHttp.responseText);
        }
        xmlHttp.open("GET", theUrl, true); // true for asynchronous 
        xmlHttp.send(null);
        return xmlHttp.responseText;
    }

    function changeTable(responseText) {
        document.getElementById('button_result_table').innerHTML = responseText;
    }

    return (

        <div>
            <form class="rendered-form" action="action.php" method="get">
                <div class="">
                    <h2 access="false" id="control-1547247">Please fill in these required data fields to check your approval prediction</h2></div>
                <div class="">
                    <h3 access="false" id="control-8289030">Basic Information</h3></div>
                <div class="formbuilder-number form-group field-x1">
                    <label for="x1" class="formbuilder-number-label"><span id="docs-internal-guid-3bc12815-7fff-8db7-6851-189bb3425286"><span>1. What is your amount of the given credit?</span></span><span class="formbuilder-required">*</span>  <span class="tooltip-element" tooltip="NT dollar, it includes both the individual consumer credit and his/her family or supplementary credit">?</span></label>
                    <input type="number" class="form-control" name="x1" access="false" id="x1" title="NT dollar, it includes both the individual consumer credit and his/her family or supplementary credit" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-select form-group field-x2">
                    <label for="x2" class="formbuilder-select-label">2. What is your gender? <span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x2" id="x2" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="1" id="x2-0">Male</option>
                        <option value="2" id="x2-1">Female</option>
                    </select>
                </div>
                <div class="formbuilder-select form-group field-x3">
                    <label for="x3" class="formbuilder-select-label">3. What is your highest level of education?<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x3" id="x3" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="1" id="x3-0">Graduate School</option>
                        <option value="2" id="x3-1">University</option>
                        <option value="3" id="x3-2">High school</option>
                        <option value="4" id="x3-3">Others</option>
                    </select>
                </div>
                <div class="formbuilder-select form-group field-x4">
                    <label for="x4" class="formbuilder-select-label">4. What is your marital status?<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x4" id="x4" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="1" id="x4-0">Married</option>
                        <option value="2" id="x4-1">Single</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x5">
                    <label for="x5" class="formbuilder-number-label">5. What is your age in years?<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x5" access="false" min="0" id="x5" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h3 access="false" id="control-9169068">History of payment for the past 6 months</h3></div>
                <div class="">
                    <h4 access="false" id="control-7912213">For the first month in the past six-month period (6 months ago)</h4></div>
                <div class="formbuilder-select form-group field-x11">
                    <label for="x11" class="formbuilder-select-label">6. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x11" id="x11" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x11-0">Pay duly</option>
                        <option value="1" id="x11-1">Payment delay for one month</option>
                        <option value="2" id="x11-2">Payment delay for two months</option>
                        <option value="3" id="x11-3">Payment delay for three months</option>
                        <option value="4" id="x11-4">Payment delay for four months</option>
                        <option value="5" id="x11-5">Payment delay for five months</option>
                        <option value="6" id="x11-6">Payment delay for six months</option>
                        <option value="7" id="x11-7">Payment delay for seven months</option>
                        <option value="8" id="x11-8">Payment delay for eight months</option>
                        <option value="9" id="x11-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x17">
                    <label for="x17" class="formbuilder-number-label">7. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x17" access="false" min="0" id="x17" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-number-1643080645861">
                    <label for="number-1643080645861" class="formbuilder-number-label">8. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">?  </span></label>
                    <input type="number" class="form-control" name="number-1643080645861" access="false" min="0" id="number-1643080645861" title="NT dollar" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h4 access="false" id="control-398337">For the second month in the past six-month period (5 months ago)</h4></div>
                <div class="formbuilder-select form-group field-x10">
                    <label for="x10" class="formbuilder-select-label">9. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x10" id="x10" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x10-0">Pay duly</option>
                        <option value="1" id="x10-1">Payment delay for one month</option>
                        <option value="2" id="x10-2">Payment delay for two months</option>
                        <option value="3" id="x10-3">Payment delay for three months</option>
                        <option value="4" id="x10-4">Payment delay for four months</option>
                        <option value="5" id="x10-5">Payment delay for five months</option>
                        <option value="6" id="x10-6">Payment delay for six months</option>
                        <option value="7" id="x10-7">Payment delay for seven months</option>
                        <option value="8" id="x10-8">Payment delay for eight months</option>
                        <option value="9" id="x10-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x16">
                    <label for="x16" class="formbuilder-number-label">10. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x16" access="false" min="0" id="x16" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-x22">
                    <label for="x22" class="formbuilder-number-label">11. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">? </span></label>
                    <input type="number" class="form-control" name="x22" access="false" min="0" id="x22" title="NT dollar" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h4 access="false" id="control-9476016">For the third month in the past six-month period (4 months ago)</h4></div>
                <div class="formbuilder-select form-group field-x9">
                    <label for="x9" class="formbuilder-select-label">12. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x9" id="x9" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x9-0">Pay duly</option>
                        <option value="1" id="x9-1">Payment delay for one month</option>
                        <option value="2" id="x9-2">Payment delay for two months</option>
                        <option value="3" id="x9-3">Payment delay for three months</option>
                        <option value="4" id="x9-4">Payment delay for four months</option>
                        <option value="5" id="x9-5">Payment delay for five months</option>
                        <option value="6" id="x9-6">Payment delay for six months</option>
                        <option value="7" id="x9-7">Payment delay for seven months</option>
                        <option value="8" id="x9-8">Payment delay for eight months</option>
                        <option value="9" id="x9-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x15">
                    <label for="x15" class="formbuilder-number-label">13. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x15" access="false" min="0" id="x15" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-x21">
                    <label for="x21" class="formbuilder-number-label">14. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">?  </span></label>
                    <input type="number" class="form-control" name="x21" access="false" min="0" id="x21" title="NT dollar" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h4 access="false" id="control-3134685">For the fourth month in the past six-month period (3 months ago)</h4></div>
                <div class="formbuilder-select form-group field-x8">
                    <label for="x8" class="formbuilder-select-label">15. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x8" id="x8" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x8-0">Pay duly</option>
                        <option value="1" id="x8-1">Payment delay for one month</option>
                        <option value="2" id="x8-2">Payment delay for two months</option>
                        <option value="3" id="x8-3">Payment delay for three months</option>
                        <option value="4" id="x8-4">Payment delay for four months</option>
                        <option value="5" id="x8-5">Payment delay for five months</option>
                        <option value="6" id="x8-6">Payment delay for six months</option>
                        <option value="7" id="x8-7">Payment delay for seven months</option>
                        <option value="8" id="x8-8">Payment delay for eight months</option>
                        <option value="9" id="x8-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x14">
                    <label for="x14" class="formbuilder-number-label">16. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x14" access="false" min="0" id="x14" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-x20">
                    <label for="x20" class="formbuilder-number-label">17. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">?  </span></label>
                    <input type="number" class="form-control" name="x20" access="false" min="0" id="x20" title="NT dollar" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h4 access="false" id="control-910304">For the fifth month in the past six-month period (2 months ago)</h4></div>
                <div class="formbuilder-select form-group field-x7">
                    <label for="x7" class="formbuilder-select-label">18. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x7" id="x7" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x7-0">Pay duly</option>
                        <option value="1" id="x7-1">Payment delay for one month</option>
                        <option value="2" id="x7-2">Payment delay for two months</option>
                        <option value="3" id="x7-3">Payment delay for three months</option>
                        <option value="4" id="x7-4">Payment delay for four months</option>
                        <option value="5" id="x7-5">Payment delay for five months</option>
                        <option value="6" id="x7-6">Payment delay for six months</option>
                        <option value="7" id="x7-7">Payment delay for seven months</option>
                        <option value="8" id="x7-8">Payment delay for eight months</option>
                        <option value="9" id="x7-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x13">
                    <label for="x13" class="formbuilder-number-label">19. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x13" access="false" min="0" id="x13" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-x19">
                    <label for="x19" class="formbuilder-number-label">20. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">?  </span></label>
                    <input type="number" class="form-control" name="x19" access="false" min="0" id="x19" title="NT dollar" required="required" aria-required="true" />
                </div>
                <div class="">
                    <h4 access="false" id="control-4646327">For the sixth month in the past six-month period (1 months ago / last month)</h4></div>
                <div class="formbuilder-select form-group field-x6">
                    <label for="x6" class="formbuilder-select-label">21. Month repayment status for this month<span class="formbuilder-required">*</span>  </label>
                    <select class="form-control" name="x6" id="x6" required="required" aria-required="true">
                        <option selected="true" />
                        <option value="-1" id="x6-0">Pay duly</option>
                        <option value="1" id="x6-1">Payment delay for one month</option>
                        <option value="2" id="x6-2">Payment delay for two months</option>
                        <option value="3" id="x6-3">Payment delay for three months</option>
                        <option value="4" id="x6-4">Payment delay for four months</option>
                        <option value="5" id="x6-5">Payment delay for five months</option>
                        <option value="6" id="x6-6">Payment delay for six months</option>
                        <option value="7" id="x6-7">Payment delay for seven months</option>
                        <option value="8" id="x6-8">Payment delay for eight months</option>
                        <option value="9" id="x6-9">Payment delay for nine months</option>
                    </select>
                </div>
                <div class="formbuilder-number form-group field-x12">
                    <label for="x12" class="formbuilder-number-label">22. Amount of bill statement for this month<span class="formbuilder-required">*</span>  </label>
                    <input type="number" class="form-control" name="x12" access="false" min="0" id="x12" required="required" aria-required="true" />
                </div>
                <div class="formbuilder-number form-group field-x18">
                    <label for="x18" class="formbuilder-number-label">23. Amount of previous payment for this month<span class="formbuilder-required">*</span><span class="tooltip-element" tooltip="NT dollar">?  </span></label>
                    <input type="number" class="form-control" name="x18" access="false" min="0" id="x18" title="NT dollar" required="required" aria-required="true" />
                </div>
                <br />
                <div>
                    <input type="submit" onClick={() => {
                        return httpGetAsync("https://recourse-api.herokuapp.com/recourse",
                            changeTable);
                    }}
                    value="Get My Recourse Action Set! " />

                    <button onClick={() => {
                        return httpGetAsync("https://recourse-api.herokuapp.com/recourse",
                            changeTable);
                    }}> Show Action Set </button>
                    <button onClick={() => {
                        document.getElementById('button_result_table').innerHTML = null;
                    }}> Hide Action Set </button>

                </div>
            </form>
            <br />
            
        </div>


    );





}

export default ActionForm;