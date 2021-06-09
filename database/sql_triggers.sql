-- Unavailable Despite Template - INSERT

DELIMITER $$
CREATE TRIGGER after_udt_insert
AFTER INSERT ON unavailable_despite_templates
FOR EACH ROW
BEGIN
  IF NEW.created_by_user like '%csp%' THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'create', NULL, NULL, '', current_timestamp(), NEW.created_by_user);
  END IF;
END $$
DELIMITER ;


-- Unavailable Despite Template - UPDATE

DELIMITER $$
CREATE TRIGGER after_udt_update
AFTER UPDATE ON unavailable_despite_templates
FOR EACH ROW
BEGIN
  IF NEW.created_by_user like '%csp%' THEN
    IF OLD.approval_status <> NEW.approval_status THEN
      INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.approval_status, NEW.approval_status, 'approval_status', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
    END IF;
    IF OLD.start_date <> NEW.start_date THEN
      INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.start_date, NEW.start_date, 'start_date', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
    END IF;
    IF OLD.end_date <> NEW.end_date THEN
      INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'UnavailableDespiteTemplate', 'update', OLD.end_date, NEW.end_date, 'end_date', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
    END IF;
  END IF;
END $$
DELIMITER ;


-- Unavailable Despite Template - DESTROY

DELIMITER $$
CREATE TRIGGER after_udt_destroy
AFTER DELETE ON unavailable_despite_templates
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), OLD.id, 'UnavailableDespiteTemplate', 'destroy', NULL, NULL, '', current_timestamp(), OLD.created_by_user);
END $$
DELIMITER ;


-- Coach Sessions - INSERT

DELIMITER $$
CREATE TRIGGER after_coach_sessions_insert 
AFTER INSERT ON coach_sessions 
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'CoachSession', 'create', NULL, NULL, '', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
END $$
DELIMITER ;


-- Coach Sessions - UPDATE

DELIMITER $$
CREATE TRIGGER after_coach_sessions_update
AFTER UPDATE ON coach_sessions
FOR EACH ROW
BEGIN
  IF OLD.cancelled <> NEW.cancelled THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'CoachSession', 'update', OLD.cancelled, NEW.cancelled, 'cancelled', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF ((OLD.coach_id <> NEW.coach_id) OR (OLD.coach_id IS NULL AND NEW.coach_id IS NOT NULL) OR (OLD.coach_id IS NOT NULL AND NEW.coach_id IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'CoachSession', 'update', OLD.coach_id, NEW.coach_id, 'coach_id', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.moderator_id <> NEW.moderator_id) OR (OLD.moderator_id IS NULL AND NEW.moderator_id IS NOT NULL) OR (OLD.moderator_id IS NOT NULL AND NEW.moderator_id IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'CoachSession', 'update', OLD.moderator_id, NEW.moderator_id, 'moderator_id', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.eschool_session_id <> NEW.eschool_session_id) OR (OLD.eschool_session_id IS NULL AND NEW.eschool_session_id IS NOT NULL) OR (OLD.eschool_session_id IS NOT NULL AND NEW.eschool_session_id IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'CoachSession', 'update', OLD.eschool_session_id, NEW.eschool_session_id, 'eschool_session_id', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.reassigned <> NEW.reassigned) OR (OLD.reassigned IS NULL AND NEW.reassigned IS NOT NULL) OR (OLD.reassigned IS NOT NULL AND NEW.reassigned IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'CoachSession', 'update', OLD.reassigned, NEW.reassigned, 'reassigned', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.session_status <> NEW.session_status) OR (OLD.session_status IS NULL AND NEW.session_status IS NOT NULL) OR (OLD.session_status IS NOT NULL AND NEW.session_status IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'CoachSession', 'update', OLD.session_status, NEW.session_status, 'session_status', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
END $$
DELIMITER ;


-- Coach Sessions - DESTROY

DELIMITER $$
CREATE TRIGGER after_coach_sessions_destroy
AFTER DELETE ON coach_sessions
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), OLD.id, 'CoachSession', 'destroy', NULL, NULL, '', current_timestamp(), OLD.created_by_user);
END $$
DELIMITER ;


-- Substitutions - INSERT

DELIMITER $$
CREATE TRIGGER after_substitutions_insert 
AFTER INSERT ON substitutions 
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'Substitution', 'create', NULL, NULL, '', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
END $$
DELIMITER ;


-- Substitutions - UPDATE

DELIMITER $$
CREATE TRIGGER after_substitutions_update
AFTER UPDATE ON substitutions
FOR EACH ROW
BEGIN
  IF OLD.was_reassigned <> NEW.was_reassigned THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'Substitution', 'update', OLD.was_reassigned, NEW.was_reassigned, 'was_reassigned', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF ((OLD.grabber_coach_id <> NEW.grabber_coach_id) OR (OLD.grabber_coach_id IS NULL AND NEW.grabber_coach_id IS NOT NULL) OR (OLD.grabber_coach_id IS NOT NULL AND NEW.grabber_coach_id IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Substitution', 'update', OLD.grabber_coach_id, NEW.grabber_coach_id, 'grabber_coach_id', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.grabbed <> NEW.grabbed) OR (OLD.grabbed IS NULL AND NEW.grabbed IS NOT NULL) OR (OLD.grabbed IS NOT NULL AND NEW.grabbed IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Substitution', 'update', OLD.grabbed, NEW.grabbed, 'moderator_id', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
END $$
DELIMITER ;


-- Substitutions - DESTROY

DELIMITER $$
CREATE TRIGGER after_substitutions_destroy
AFTER DELETE ON substitutions
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), OLD.id, 'Substitution', 'destroy', NULL, NULL, '', current_timestamp(), OLD.created_by_user);
END $$
DELIMITER ;


-- Accounts - INSERT

DELIMITER $$
CREATE TRIGGER after_accounts_insert 
AFTER INSERT ON accounts 
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'Account', 'create', NULL, NULL, '', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
END $$
DELIMITER ;


-- Accounts - UPDATE

DELIMITER $$
CREATE TRIGGER after_accounts_update
AFTER UPDATE ON accounts
FOR EACH ROW
BEGIN
  IF OLD.active <> NEW.active THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'Account', 'update', OLD.active, NEW.active, 'active', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF OLD.type <> NEW.type THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), NEW.id, 'Account', 'update', OLD.type, NEW.type, 'type', current_timestamp(), if(NEW.created_by_user is not null, NEW.created_by_user, 'test21'));
  END IF;
  IF ((OLD.full_name <> NEW.full_name) OR (OLD.full_name IS NULL AND NEW.full_name IS NOT NULL) OR (OLD.full_name IS NOT NULL AND NEW.full_name IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.full_name, NEW.full_name, 'full_name', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.preferred_name <> NEW.preferred_name) OR (OLD.preferred_name IS NULL AND NEW.preferred_name IS NOT NULL) OR (OLD.preferred_name IS NOT NULL AND NEW.preferred_name IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.preferred_name, NEW.preferred_name, 'preferred_name', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.rs_email <> NEW.rs_email) OR (OLD.rs_email IS NULL AND NEW.rs_email IS NOT NULL) OR (OLD.rs_email IS NOT NULL AND NEW.rs_email IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.rs_email, NEW.rs_email, 'rs_email', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.personal_email <> NEW.personal_email) OR (OLD.personal_email IS NULL AND NEW.personal_email IS NOT NULL) OR (OLD.personal_email IS NOT NULL AND NEW.personal_email IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.personal_email, NEW.personal_email, 'personal_email', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.primary_phone <> NEW.primary_phone) OR (OLD.primary_phone IS NULL AND NEW.primary_phone IS NOT NULL) OR (OLD.primary_phone IS NOT NULL AND NEW.primary_phone IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.primary_phone, NEW.primary_phone, 'primary_phone', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
  IF ((OLD.primary_country_code <> NEW.primary_country_code) OR (OLD.primary_country_code IS NULL AND NEW.primary_country_code IS NOT NULL) OR (OLD.primary_country_code IS NOT NULL AND NEW.primary_country_code IS NULL)) THEN
    INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), new.id, 'Account', 'update', OLD.primary_country_code, NEW.primary_country_code, 'primary_country_code', current_timestamp(), if(NEW.created_by_user is NOT NULL, NEW.created_by_user,'test21'));
  END IF;
END $$
DELIMITER ;


-- Accounts - DESTROY

DELIMITER $$
CREATE TRIGGER after_accounts_destroy
AFTER DELETE ON accounts
FOR EACH ROW
BEGIN
  INSERT INTO audit_log_records (created_at, loggable_id, loggable_type, action, previous_value, new_value, attribute_name, timestamp, changed_by) VALUES(current_timestamp(), OLD.id, 'Account', 'destroy', NULL, NULL, '', current_timestamp(), OLD.created_by_user);
END $$
DELIMITER ;