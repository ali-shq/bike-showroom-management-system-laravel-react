import React from "react";

const ExpenseForm = () => {
    return (
        <form id="myForm" method="POST" action="">
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label for="name">
                        Expense Name<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Expense"
                        name="ex_name"
                        value=""
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="name">
                        Amount<font style="color:red">*</font>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder=""
                        name="amount"
                        value=""
                    />
                </div>
                <div className="form-group col-md-4">
                    <label for="dob">
                        Date<font style="color:red">*</font>
                    </label>
                    <input
                        type="date"
                        className="form-control singledatepicker"
                        id="dob"
                        name="dob"
                    />
                </div>

                <div className="form-group col-md-12">
                    <button type="submit" className="btn btn-primary btn-sm">
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ExpenseForm;
