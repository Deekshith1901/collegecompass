alter table public.saved_comparisons
drop constraint if exists chk_college_ids_len;

alter table public.saved_comparisons
add constraint chk_college_ids_len check (array_length(college_ids, 1) between 2 and 4);
