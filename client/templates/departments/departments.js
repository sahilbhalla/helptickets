// Add Department Template Events
Template.add_departments.events({
    "submit .add-department-form": function(event){
        var name = event.target.name.value;
        var head = event.target.head.value;

        // Insert Dept
        Departments.insert({
            name: name,
            head: head,
            createdAt: new Date() // current time
        });

         FlashMessages.sendSuccess("Department Added");
        
        Router.go('/staff/departments');
        
        // Prevent Submit
        return false;
    }
});

// Departments Template Events
Template.departments.events({
    "click .delete-department": function (event) {
        if(confirm("Are you sure?")) {
            Departments.remove(this._id);
            
            FlashMessages.sendSuccess("Department Deleted");
            
            // Prevent Submit
            return false;
        }
    }
});