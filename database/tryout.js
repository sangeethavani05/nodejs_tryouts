let mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Welcome@123',
  database : 'coachportal_development'
});
 
connection.connect();

// Unavailable Despite Templates - Insert

let after_udt_insert = `CREATE TRIGGER after_udt_insert 
AFTER INSERT ON unavailable_despite_templates 
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'create', NULL, NULL, '', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
END`

// Unavailable Despite Templates - Update

let after_udt_update = `CREATE TRIGGER after_udt_update
AFTER UPDATE ON unavailable_despite_templates
FOR EACH ROW
BEGIN
  IF OLD.approval_status <> NEW.approval_status THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.approval_status, NEW.approval_status, 'approval_status', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF OLD.start_date <> NEW.start_date THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.start_date, NEW.start_date, 'start_date', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF OLD.end_date <> NEW.end_date THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.end_date, NEW.end_date, 'end_date', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
END`

// Unavailable Despite Templates - Destroy

let after_udt_destroy = `CREATE TRIGGER after_udt_destroy
AFTER DELETE ON unavailable_despite_templates
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), OLD.id, 'UnavailableDespiteTemplate', 'destroy', NULL, NULL, '', current_timestamp(), OLD.created_by_user);
END`

// Trigger Creation

after_udt_insert = executeQuery(after_udt_insert,'after_udt_insert')
after_udt_update = executeQuery(after_udt_update,'after_udt_update')
after_udt_destroy = executeQuery(after_udt_destroy,'after_udt_destroy')


// Execute Query Function

function executeQuery(query, name, params) {
  try{

    // Drop Trigger
    let drop_query = `drop trigger if exists ${name}`
    connection.query(drop_query, params, (drop_error, drop_result, fields) => {
      if(drop_error){
        console.log(`Error in Trigger Drop - ${name}: ${typeof error == 'Object' ? JSON.stringify(drop_error) : drop_error}`)
      }
      else{

        // Create Trigger
        connection.query(query, params, (error, results, fields) => {
            if (error) {
              console.log(`Error in Trigger Creation - ${name}: ${typeof error == 'Object' ? JSON.stringify(error) : error}`);
            }
            else{
              console.log(`Success - ${name}`)
            }
          });
      }
    })
    
  }
  catch(e){
    console.log(`Catch - ${name}: ${typeof e == 'Object' ? JSON.stringify(e) : e}`)
  }
        
}