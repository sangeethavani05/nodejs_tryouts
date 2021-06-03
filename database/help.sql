-- To Drop Trigger
DROP trigger after_udt_insert;

-- Unavailable Despite Template
-- INSERT
INSERT INTO unavailable_despite_templates(coach_id, start_date, end_date, unavailability_type, comments, approval_status, coach_session_id, created_at, updated_at, ancestry, changed_by) VALUES(9557, '2021-04-23 11:30:00', '2021-04-23 12:00:00', 1, 'trigger test', 1, NULL, current_timestamp(), current_timestamp(), NULL, 'test23')
-- UPDATE
UPDATE unavailable_despite_templates set approval_status = 1 where id = 114401;
-- DESTROY
DELETE FROM unavailable_despite_templates where id = 114401;

-- Coach Sessions
-- INSERT
INSERT INTO coach_sessions() VALUES();
-- UPDATE
UPDATE coach_sessions set cancelled = 1 where id = 684650;
-- DESTROY
DELETE FROM coach_sessions where id = 684651;

-- Substitutions
-- INSERT
INSERT INTO substitutions() VALUES();
-- UPDATE
UPDATE substitutions set was_reassigned = 1 where id = 24488;
-- DESTROY
DELETE FROM substitutions where id = 24488;

-- Accounts
-- INSERT
INSERT INTO accounts(type) VALUES('Coach');
-- UPDATE
UPDATE accounts set type = 'CoachManager',rs_email = 'trigger@test.com',primary_country_code = null, primary_phone = 567890765, active = 0 where id = 9606;
-- DESTROY
DELETE FROM accounts where id = 9606;