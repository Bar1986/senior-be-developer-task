# I wasn’t sure if I was allowed to add new functions to Queue.ts, so I only implemented the existing ones.
# However, if I were allowed to add my own functions, I would create a retry mechanism by using a time-based interval which will try to process all the pending messages.
# Additionally,  I would change the Dequeue to async and use lock mechanism to make it more efficent in race condition issues.
# Furthermore,  I would introduce  and  send all the failed messages after retry mechanism failed for exapmle 3 times  to Dead letter queue (DLQ) to  store  these messages for further handling. either  some retry operation or back-office hanlde
